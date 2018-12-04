import {LitElement, html} from '@polymer/lit-element'
import { repeat } from '@polymer/lit-element/node_modules/lit-html/directives/repeat'
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

class Aliens extends connect(store)(LitElement) {

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

  stateChanged(state) {
    this.aliens = state.app.aliens
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
      ${repeat(this.aliens, (alien)=> alien.id, (alien)=> html`
        <invaders-alien xpos="${alien.xpos}" ypos="${alien.ypos}" type="${alien.type}"></invaders-alien>
      `)}
    </div>
    `
  }
}

export default customElements.define('invaders-aliens',Aliens)