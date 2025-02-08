/**
    * Name: Zhang Junkai
    * Class: DIT/1B/02
    * Admin No: 2429634
 */

const card_template = document.createElement("template");

card_template.innerHTML = `
<style>
.card-header {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    height: fit-content;
    width: 100%;
    margin-bottom: 1em;
}

info-card span {
    display: flex;
    gap: 0.2em;
}
</style>

<div class="card-header">
    <h2 id="customerName"></h2>
</div>
<div class="mb-3">
    <span>Sales: $<p id="sales"></p></span>
    <span>Quantity: <p id="quantity"></p></span>
    <span>Profit: $<p id="profit"></p></span>
</div>
<button id="showMoreBtn">Show More</button>
<div id="moreInfo" class="mb-3 d-none">
    <span>Order ID: <p id="orderID"></p></span>
    <span>Order Date: <p id="orderDate"></p></span>
    <span>Ship Date: <p id="shipDate"></p></span>
    <span>Ship Mode: <p id="shipMode"></p></span>
    <span>Segment: <p id="segment"></p></span>
    <span><p id="country"></p><br><p id="city"></p><br><p id="state"></p></span>
    <span><p id="region"></p>, <p id="postalCode"></p></span>
    <span>Category: <p id="category"></p>, <p id="subCategory"></p></span>
    <span>Product: <p id="productName"></p></span>
    <span>Discount: <p id="discount"></p></span>
</div>
<button id="hideBtn" class="d-none">Hide</button>
`;

const registeredAttributes = [
    'customerName', 'sales', 'quantity', 'profit', 'orderID', 'orderDate', 
    'shipDate', 'shipMode','segment', 'country', 'city', 'state',
    'region', 'postalCode', 'category','subCategory', 'productName', 
    'discount'
];

class InfoCard extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return registeredAttributes;
    }

    // Checks if the attribute value incoming is the same as the old one. If no, change it.
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.appendChild(card_template.content.cloneNode(true));
        registeredAttributes.forEach(attr => this.querySelector(`#${attr}`).innerText = this[attr]);

        const showMoreBtn = this.querySelector('#showMoreBtn');
        const hideBtn = this.querySelector('#hideBtn');
        const moreInfo = this.querySelector('#moreInfo');

        showMoreBtn.addEventListener('click', () => {
            showMoreBtn.classList.add('d-none');
            moreInfo.classList.remove('d-none');
            hideBtn.classList.remove('d-none');
        });

        hideBtn.addEventListener('click', () => {
            showMoreBtn.classList.remove('d-none');
            moreInfo.classList.add('d-none');
            hideBtn.classList.add('d-none');
        });
    }
}

customElements.define("info-card", InfoCard);