document.addEventListener("DOMContentLoaded", function () {

    const displayItemsCallback = (data, elemId) => {
        const dataList = document.getElementById(elemId);
        dataList.innerHTML = ''; // Reset data

        data.slice(0,30).forEach((item) => {
            const displayItem = document.createElement("info-card");
            displayItem.customer_name = item.customerName;
            displayItem.sales = (item.sales).toFixed(2)
            displayItem.quantity = item.quantity;
            displayItem.profit = (item.profit).toFixed(2);

            dataList.appendChild(displayItem);
        });
    }

    //TODO: Make this dynamic
    const categoryArr = ['Furniture', 'Office Supplies', 'Technology'];

    categoryArr.forEach(category => {
        document
            .getElementById(`${category}Filter`)
            .addEventListener('click', () => {
                const categoryHeader = document.getElementById('categoryHeader');
                categoryHeader.innerText = category;
                fetch(`http://localhost:8081/bycategory/${category}`)
                    .then(res => res.json())
                    .then(data => displayItemsCallback(data, "dataList"));
            })
    });

    // fetch('http://localhost:8081/bycategory/Furniture')
    //     .then(res => res.json())
    //     .then(data => displayItemsCallback(data, "furnitureList"));

    // fetch('http://localhost:8081/bycategory/Office%20Supplies')
    //     .then(res => res.json())
    //     .then(data => displayItemsCallback(data, "officeList"));

    // fetch('http://localhost:8081/bycategory/Technology')
    //     .then(res => res.json())
    //     .then(data => displayItemsCallback(data, "technologyList"));
});
