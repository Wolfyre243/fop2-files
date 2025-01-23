const template = document.createElement("template");

template.innerHTML = `
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
    <h1>Customer Name</h1>
    <h2 id="customer_name"></h2>
</div>
<div>
    <p id="sales">Sales:</p>
    <p id="quantity">Quantity:</p>
    <p id="profit">Profit US$:</p>
</div>


`;

class InfoCard extends HTMLElement {
    constructor() {
        super();
        // this.shadow = this.attachShadow({ mode: "open" });
        this.appendChild(template.content.cloneNode(true));
        this.querySelector("#customer_name").innerText = 'John Doe';
    }

    static get observedAttributes() {
        return ['customer_name', 'sales', 'quantity', 'profit'];
    }

    // Checks if the attribute value incoming is the same as the old one. If no, change it.
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
        this.querySelector("#customer_name").innerText = this.customer_name;
        this.querySelector("#sales").innerText = this.sales;
        this.querySelector("#quantity").innerText = this.quantity;
        this.querySelector("#profit").innerText = this.profit;
    }

    connectedCallback() {
        this.querySelector("#customer_name").innerText = this.customer_name;
        this.querySelector("#sales").innerText = this.sales;
        this.querySelector("#quantity").innerText = this.quantity;
        this.querySelector("#profit").innerText = this.profit;
    }
}

customElements.define("info-card", InfoCard);