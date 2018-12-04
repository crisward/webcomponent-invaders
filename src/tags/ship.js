import {LitElement, html} from '@polymer/lit-element'
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { shipMove } from '../actions.js'

class Ship extends connect(store)(LitElement) {

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

  shoot(){
    this.shooting = true
    let shot = document.createElement("invaders-shot")
    shot.setAttribute("xpos",this.xpos+32)
    this.parentNode.appendChild(shot)
    setTimeout(()=>{this.shooting = false},100)
  }

  move(){
    if(this.keysPressed[" "] && !this.shooting){
      this.shoot();
    }
    if(this.keysPressed["ArrowRight"] && this.xpos < 745){
      store.dispatch(shipMove(10))
    }else if(this.keysPressed["ArrowLeft"] && this.xpos > 0){
      store.dispatch(shipMove(-10))
    }
    requestAnimationFrame(()=>{
      this.move()
    })
  }

  stateChanged(state) {
    this.xpos = state.app.ship_x
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