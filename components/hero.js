const template = document.createElement('template');
template.innerHTML = `
<style>
.hero{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80' );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.hero h1{
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
}
.hero p{
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
}
.hero .btn{
    padding: 0.5rem 1rem;
    background: #000;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}
</style>
<div class="hero">
    <div class="hero-text">
        <h1>Hero Section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <a href="#" class="btn">Download</a>
    </div>
</div>


`;
export default class Hero extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('my-hero', Hero);
