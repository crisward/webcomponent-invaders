import {LitElement, html} from '@polymer/lit-element'

class Alien extends LitElement {

  static get properties(){
    return {
      xpos: { attribute: 'xpos',type: Number },
      type: { attribute: 'type' },
      ypos: { type: Number },
    };
  }

  constructor() {
    super();
    this.xpos = +this.getAttribute("xpos")
    this.ypos = 450
    console.log("adding interval")
    this.interval = setInterval(()=>{
      this.bombs()
    },1000)
  }

  disconnectedCallback(){
    console.log("clear interval")
    clearInterval(this.interval)
  }

  bombs(){
    let frequency = 10 // 1 in ?
    let shouldDrop = Math.round(Math.random()*frequency) == 1
    if(shouldDrop){
      let bomb = document.createElement("invaders-bomb")
      bomb.setAttribute("xpos",+this.xpos+32)
      bomb.setAttribute("ypos",+this.ypos+32)
      if(this.parentNode) this.parentNode.appendChild(bomb)
    }
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
      <div class="alien ${this.type}" style="transform: translate(${this.xpos}px,${this.ypos}px)"></div>
    `;
  }
}

export default customElements.define('invaders-alien',Alien)