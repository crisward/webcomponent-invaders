import {LitElement, html} from '@polymer/lit-element'
import { store } from '../store.js';
import {reduceLives} from '../actions.js'

class Bomb extends LitElement {

  static get properties(){
    return {
      xpos: { attribute: 'xpos',type: Number },
      ypos: { attribute: 'ypos', type: Number },
    };
  }

  constructor() {
    super();
  }

  firstUpdated(){
    this.move()
  }

  move(){
    let newy = (+this.ypos || 0) + 5
    requestAnimationFrame(()=>{
      this.ypos=newy
      if(newy < 490){
        let {x,y} = this.parentNode.getBoundingClientRect() 
        let hit = document.elementFromPoint(x+ +this.xpos,y+ +this.ypos)
        let tagname = hit && hit.tagName.toLowerCase() || ""
        // when bomb hits ship
        if(tagname=="invaders-ship"){
          store.dispatch(reduceLives(1))
          //hit.remove() - don't remove shop, perhaps add a die event to it, so it knows to blow up
          this.remove()
          return
        }
        this.move()
        return
      }
      // when bomb hits bottom
      this.remove()
    })
  }

  render() {
    return html`
      <style> 
        .bomb{
          width:10px;
          height:10px;
          position:absolute;
          background:yellow;
        }
      </style>
      <div class="bomb" style="top:${this.ypos}px;left:${this.xpos}px"></div>
    `;
  }

}

export default customElements.define('invaders-bomb',Bomb)