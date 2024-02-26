class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <div class="footer">
        <h2>Footer</h2>
      </div>`;
    }
  
  }
  
  customElements.define('footer-component', Footer);