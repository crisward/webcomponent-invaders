import {LitElement, html} from '@polymer/lit-element'
import { store } from '../store.js';
import {increaseScore} from '../actions.js'

class Shot extends LitElement {

  static get properties(){
    return {
      xpos: { attribute: 'xpos' },
      ypos: { type: Number },
    };
  }

  constructor() {
    super();
    this.ypos = 450
    this.move()
  }

  move(){
    let newy = +this.ypos - 10
    requestAnimationFrame(()=>{
      this.ypos=newy
      if(newy > 0){
        // let {x,y} = this.parentNode.getBoundingClientRect() 
        // let hit = document.elementFromPoint(x+ +this.xpos,y+ +this.ypos)
        // let tagname = hit && hit.tagName.toLowerCase() || ""
        // // when shot hits alien
        // if(tagname=="invaders-alien"){
        //   store.dispatch(increaseScore(1))
        //   hit.remove()
        //   this.remove()
        //   return
        // }
        this.move()
        return
      }
      // when shot hits top
      this.remove()
    })
  }

  render() {
    return html`
      <style> 
        .shot{
          width:15px;
          height:15px;
          position:absolute;
          background:white;
        }
      </style>
      <div class="shot" style="top:${this.ypos}px;left:${this.xpos}px"></div>
    `;
  }

}

export default customElements.define('invaders-shot',Shot)