const template = document.createElement("template");

template.innerHTML = `
<style>
.hello-world h1 {
    font-weight: bold;
    font-family: sans-serif;
    color: red;
}
</style>
<div class="hello-world">
    <h1>Hello <span id="name"></span>!</h1>
</div>
`;

const state = "World"

class ItemThing extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // Initial text as world
        this.shadowRoot.querySelector("#name").innerText = state;
    }

    static get observedAttributes() {
        return ["name"];
    }

    // Checks if the attribute value incoming is the same as the old one. If no, change it.
    attributeChangedCallback(property, oldValue, newValue) {
        console.log(oldValue)
        if (oldValue === newValue) return;
        this[property] = newValue;
        this.shadowRoot.querySelector("#name").innerText = this.name;
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#name").innerText = this.name;
    }
}

class WelcomeButton extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', () => {
            document.getElementById('greeting').setAttribute('name', 'hi');
        });
    }
}

customElements.define("item-thing", ItemThing);
customElements.define("welcome-button", WelcomeButton, { extends: "button" });
