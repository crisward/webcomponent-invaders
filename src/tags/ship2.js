import {LitElement, html} from '@polymer/lit-element'

class Ship extends LitElement {

  static get properties(){
    return {
      xpos: { type: Number },
      deltaX: { type: Number },
    };
  }

  constructor() {
    super();
    this.xpos = 0
    this.keysPressed = {}
    document.addEventListener("keydown",this.handleKey.bind(this),true)
    document.addEventListener("keyup",this.handleKeyUp.bind(this))
    this.move()
  }

  handleKey(e){
    this.keysPressed[e.key]=true
  }

  handleKeyUp(e){
    this.keysPressed[e.key]=false
  }

  move(){
    if(this.keysPressed[" "] && !this.shooting){
      this.shooting = true
      let shot = document.createElement("invaders-shot")
      shot.setAttribute("xpos",this.xpos+32)
      this.parentNode.appendChild(shot)
      setTimeout(()=>{this.shooting = false},100)
    }
    if(this.keysPressed["ArrowRight"]){
      this.deltaX = 10
    }else if(this.keysPressed["ArrowLeft"]){
      this.deltaX = -10
    }else{
      this.deltaX = 0
    }
    let newx = this.xpos + this.deltaX
    requestAnimationFrame(()=>{
      if(this.deltaX!=0 && newx >= 0 && newx <= 745){
        this.xpos=newx
      }
      this.move()
    })
  }

  render() {
    return html`
      <style> 
        .ship{
          display:block;
          background:yellow;
          width:80px;
          height:30px;
          position:absolute;
          bottom:0px;
        }
        .ship:before{
          content:" ";
          background:yellow;
          position:absolute;
          width: 10px;
          height: 10px;
          top:-10px;
          left:35px;
        }
      </style>
      <div class="ship" style="transform: translateX(${this.xpos}px)"></div>
    `;
  }

}

export default customElements.define('invaders-ship',Ship)