import { html, css, LitElement } from "lit";

export class GreetingWorld extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  name = "Somebody";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("greeting-world", GreetingWorld);