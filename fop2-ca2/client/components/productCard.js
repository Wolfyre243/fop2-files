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
</style>

<div class="card-header">
    <h2 id="product_name"></h2>
</div>
<div>
    <p id="sales">Sales:</p>
    <p id="quantity">Quantity:</p>
    <p id="profit">Profit US$:</p>
</div>
`;

class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['product_name', 'sales', 'quantity', 'profit'];
    }

    // Checks if the attribute value incoming is the same as the old one. If no, change it.
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.appendChild(card_template.content.cloneNode(true));
        this.querySelector("#product_name").innerText = this.product_name;
        this.querySelector("#sales").innerText = `Sales: $${this.sales}`;
        this.querySelector("#quantity").innerText = `Quantity: ${this.quantity}`;
        this.querySelector("#profit").innerText = `Profit US$: $${this.profit}`;
    }
}

customElements.define("product-card", ProductCard);