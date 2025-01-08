const template = document.createElement('template');
template.innerHTML = `
<style>
.footer{
    text-align: center;
    padding: 1rem 0;
    border: 1px solid #ccc;
}
</style>

<div class="footer">
${new Date().getFullYear()} 
<slot name="footer" />

</div>
`;
export default class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-footer', Footer);
