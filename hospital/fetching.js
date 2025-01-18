// fetch deez nuts

const endpointURL = 'http://localhost:8081';

async function getData() {
    return fetch(`${endpointURL}/allussuperstore`)
    .then(res => res.json())
    .catch(err => console.log(err));
}

const data = await getData();
console.table(
    data.slice(0, 10)
        .map(item => {
            return {
                'Customer ID': item.customerID,
                'Customer Name': item.customerName
            }
        })
)

