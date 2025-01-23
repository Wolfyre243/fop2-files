const template = document.createElement('template');

template.innerHTML = `
<div class='d-flex flex-row ml-auto w-fit'>
    <p id='content' class='p-2'></p>
    <input type='text' class='form-control w-25 h-25'>
</div>
`

class CustomTextbox extends HTMLElement {
    constructor(){
        super();
        // this.shadow = this.attachShadow({ mode:"open" });
        this.appendChild(template.content.cloneNode(true));
        this.querySelector("#content").innerText = "World";
    }

    static get observedAttributes(){
        return ["content"];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        this[property] = newValue;
    }

    connectedCallback(){
        this.querySelector("#content").innerText = this.content;
    }
}

customElements.define("custom-textbox", CustomTextbox);