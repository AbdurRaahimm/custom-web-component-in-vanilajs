const template = document.createElement('template');
template.innerHTML = `
<style>
.serviceBox{
    text-align: center;
    padding: 3rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-top: 1rem;
    margin-right: 1rem;
    flex: 0 0 30%;
}
.serviceBox img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}
.serviceBox h2{
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    margin: 1rem 0;
}
.serviceBox p{
    font-size: 1rem;
    color: #000;
    margin: 1rem 0;
}


</style>
  
<div class="serviceBox">
    <img src="" alt="" width="300" />
    <h2></h2>
    <p></p>
</div>  

`;

class Services extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes(){
        return ['img','title','desc'];
    }

    attributeChangedCallback(name,oldValue,newValue){
        if(name==='img'){
            this.shadowRoot.querySelector('img').setAttribute('src',newValue);
        }
        if(name==='title'){
            this.shadowRoot.querySelector('h2').innerText=newValue;
        }
        if(name==='desc'){
            this.shadowRoot.querySelector('p').innerText=newValue;
        }
    }

    connectedCallback(){}
}

customElements.define('my-services', Services);


