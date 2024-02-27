class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
      <div class="footer">
        <ul>
          <li><a href="/terms.html">Terms and Conditions</a></li>
          <li><a href="/privacy.html">Privacy Policy</a></li>
        </ul>
      </div>`;
    }
  
  }
  
  customElements.define('footer-component', Footer);