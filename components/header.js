const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    div {
      background-color: rgb(0 117 119);
      font-family: 'Quicksand';
    }

    header {
      padding: 1.25rem;
    }

    .header-1 {
      color: #fff;
      font-size: 2rem;
      font-weight: 200;
      text-align: center;
    }

    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
      font-size: 1rem;
    }
    
    a {
      font-weight: 400;
      margin: 0 25px;
      color: #fff;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #fff;
    }
  </style>
  <div>
  <header>
    <div class="header-1">Expressions Greeting Cards</div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Cards</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </header>
  </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

  