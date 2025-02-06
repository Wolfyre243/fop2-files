document.addEventListener("DOMContentLoaded", function () {
    const limit = parseInt(localStorage.getItem('limit')) ?? localStorage.setItem('limit', 15);

    const categoryNav = document.getElementById('categoryNav');

    const displayItemsCallback = (data, elemId) => {
        const dataList = document.getElementById(elemId);
        dataList.innerHTML = ''; // Reset data

        data.slice(0, limit).forEach((item) => {
            const displayItem = document.createElement("info-card");
            displayItem.customer_name = item.customerName;
            displayItem.sales = (item.sales).toFixed(2);
            displayItem.quantity = item.quantity;
            displayItem.profit = (item.profit).toFixed(2);
            dataList.appendChild(displayItem);
        });
    }

    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        console.log('clicked!')
        localStorage.setItem('limit', (limit + 15));
        window.location.reload();
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        console.log('clicked!')
        localStorage.setItem('limit', 15);
        window.location.reload();
    });

    fetch(`http://localhost:8081/category`)
        .then(res => res.json())
        .then(categoryArr => {
            categoryArr.forEach(category => {
                const categoryBtn = document.createElement('div');
                categoryBtn.innerHTML = `<button id="${category}Filter" class="navbtn">${category}</button>`
                categoryNav.appendChild(categoryBtn);
                
                categoryBtn.addEventListener('click', () => {
                    // categoryBtn.classList.add('active');
                    const categoryHeader = document.getElementById('categoryHeader');
                    categoryHeader.innerText = category;
                    fetch(`http://localhost:8081/bycategory/${category}`)
                        .then(res => res.json())
                        .then(data => displayItemsCallback(data, "dataList"));
                });
            });
        });
});
