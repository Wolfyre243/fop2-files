document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:8081/allussuperstore')
        .then(res => res.json())
        .then(data => {
            const dataList = document.getElementById("dataList");
            data.slice(0, 10).forEach((item) => {
                const displayItem = document.createElement("info-card");
                displayItem.customer_name = item.customerName;
                displayItem.sales = (item.sales).toFixed(2)
                displayItem.quantity = item.quantity;
                displayItem.profit = (item.profit).toFixed(2);

                dataList.appendChild(displayItem);
            });
        })
});
