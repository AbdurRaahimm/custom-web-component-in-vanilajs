const template = document.createElement('template');
template.innerHTML = `
<style>
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position:sticky;
    top:0;
    background:#fff;
    // z-index:99;
    
}
span{
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
}
.nav-links{
    display: flex;
    justify-content: space-around;
    list-style: none;

}
.nav-links li{
    padding: 0 1rem;
}
.nav-links li a{
    color: #000;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
}
.nav-links li a:hover{
    color: #f00;
}
.btn{
    padding: 0.5rem 1rem;
    background: #000;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}
</style>
<nav>
<span>Logo</span>
<ul class="nav-links">
    <li><a href="../index.html"  >Home</a></li>
    <li><a href="../about.html" >About</a></li>
    <li><a href="#" >Works</a></li>
    <li><a href="#" >Contact</a></li>
</ul>
<a href="" class="btn" >Download</a>
</nav>

`;
export default class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('my-navber', Navbar);
