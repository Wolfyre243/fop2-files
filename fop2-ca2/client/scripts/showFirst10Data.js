/**
    * Name: Zhang Junkai
    * Class: DIT/1B/02
    * Admin No: 2429634
 */

document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:8081/allussuperstore')
        .then(res => res.json())
        .then(data => {
            const dataList = document.getElementById("dataList");
            data.slice(0, 10).forEach((item) => {
                const displayItem = document.createElement("info-card");
                
                for (const key in item) {
                    displayItem[key] = item[key];
                }

                dataList.appendChild(displayItem);
            });
        })
});
