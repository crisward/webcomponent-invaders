import {LitElement, html} from '@polymer/lit-element'

class Alien extends LitElement {

  static get properties(){
    return {
      xpos: { attribute: 'xpos' },
      type: { attribute: 'type' },
      ypos: { type: Number },
    };
  }

  constructor() {
    super();
    this.xpos = +this.getAttribute("xpos")
    this.ypos = 450
  }

  render() {
    return html`
      <style> 
        .alien{
          position:absolute;
          background-blend-mode: multiply;
          background-image:url(graphics.gif);
          width: 75px;
          height: 50px; 
          background-size: 150px 150px;
        }
        .alien1{
          background-color:mediumvioletred;
          background-position: 73px -80px;
        }
        .alien2{
          background-color:red;
          background-position: 4px -32px;
        }
        .alien3{
          background-color:cyan;
          background-position: -9px -90px;
        }
        .saucer{
          background-color:orange;
          background-position: -70px 0px;
        }
      </style>
      <div class="alien ${this.type}" style="top:${this.ypos}px;left:${this.xpos}px"></div>
    `;
  }
}

export default customElements.define('invaders-alien',Alien)