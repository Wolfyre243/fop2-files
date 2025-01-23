const navbar_template = document.createElement("template");
const navbutton_template = document.createElement("template");

navbar_template.innerHTML = `
<style>
.navbar {
    background-color: rgb(79, 255, 231);
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.links {
    display: flex;
    flex-direction: row;
    column-gap: 2em;
    height: fit-content;
}
</style>

<nav class="navbar">
    <h1>US Superstore Data</h1>
    <div class="links">
        <nav-button href="#" label="Home"></nav-button>
        <nav-button href="#" label="Home"></nav-button>
        <nav-button href="#" label="Home"></nav-button>
    </div>
</nav>
`;

navbutton_template.innerHTML = `
<style>
.nav-button {
    color: white;
    background-color: rgb(40, 40, 40);
    padding: 0.5em;
    width: fit-content;
    text-decoration: none;
    border-radius: 10%;
}
</style>

<a href="#" class="nav-button">
</a>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [];
    }

    // Checks if the attribute value incoming is the same as the old one. If no, change it.
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.appendChild(navbar_template.content.cloneNode(true));
    }
}

class NavButton extends HTMLElement {
    constructor() {
        super();
        // this.shadow = this.attachShadow({ mode: "open" });
        this.appendChild(navbutton_template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["href", "label"];
    }

    // Checks if the attribute value incoming is the same as the old one. If no, change it.
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[property] = newValue;
    }

    connectedCallback() {
        this.querySelector('a').innerText = this.label;
        this.querySelector('a').href = this.href;
    }
}

customElements.define("nav-bar", NavBar);
customElements.define("nav-button", NavButton);