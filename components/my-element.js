import {LitElement, html} from 'lit';

class MyElement extends LitElement  {
    version = 'STARTING';

 render() {
     return html`
     
     <div>My element</div>
     <p>this is the ${this.version}</p>
     `
 }
}

customElements.define("my-element", MyElement);
