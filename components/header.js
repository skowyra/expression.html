const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>

    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  
    h1 {
        font-family: 'Cormorant Garamond';
        font-size: 2rem;
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
      font-family: Montserrat;
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
  <header>
    <h1>Expressions Greeting Cards</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Cards</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  </header>
`;

// import stylesheet from "./css/header.css" assert { type: "css" }

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

  