import {LitElement, html} from '@polymer/lit-element'

class Aliens extends LitElement {

  static get properties() {
    return {
      xpos: Number,
      ypos: Number
    };
  }

  constructor() {
    super();
    this.xpos = 0
    this.ypos = 0
    this.deltaX = 1
    this.move()
  }

  firstUpdated(){
    this.addAliens()
  }

  move(){
    let newx = +this.xpos + +this.deltaX
    if(newx>40){
      this.deltaX = -1
      this.ypos+=10
    }
    if(newx<-40){
      this.deltaX = 1
      this.ypos+=10
    }
    requestAnimationFrame(()=>{
      this.xpos = newx
      this.move()
    })
  }

  addAliens(){
    for(let y = 1; y<4; y+=1){
      for(let x = 50; x < 700; x+=80){
        let alien = document.createElement("invaders-alien")
        alien.setAttribute("xpos",x)
        alien.setAttribute("ypos",(y*70)-70)
        alien.setAttribute("type","alien"+y)
        this.appendChild(alien)
      }
    }
  }

  render() {
    return html`
    <style>
      .aliens{
          display: block;
          position: relative;
          height: 100%;
          width:800px;
        }
    </style>
    <div class="aliens" style="top:${this.ypos}px;left:${this.xpos}px">
      <slot></slot>
    </div>
    `
  }
}

customElements.define('invaders-aliens',Aliens)