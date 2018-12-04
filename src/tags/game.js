import {LitElement, html} from '@polymer/lit-element'
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import {addAlien} from '../actions.js'

class Game extends connect(store)(LitElement) {

  constructor() {
    super();
    this.score = 0
    this.addAliens() // perhaps have a start game button
  }

  static get properties(){
    return {
      score: { attribute: 'score',type: Number  },
      lives: { attribute: 'lives',type: Number  },
    };
  }

  addAliens(){
    let id = 0
    for(let y = 1; y<4; y+=1){
      for(let x = 50; x < 700; x+=80){
        store.dispatch(addAlien({
          id: id,
          xpos: x,
          ypos: (y*70)-70,
          type: "alien"+y,
        }))
        id++
      }
    }
  }

  stateChanged(state) {
    this.score = state.app.score
    this.lives = state.app.lives
  }

  render() {
    return html`
      <style>
        :host{
          display: block;
          position: relative;
          border:1px solid grey;
          width:825px;
          height:500px;
          margin:75px auto;
          font-family:arial black;
        }
        .infoblock{
          width:300px;
          height:50px;
          margin:0 auto;
        }
        .score,.lives{
          width:45%;
          display:inline-block;
          color:white;
          line-height:50px;
          font-size:24px;
          text-align:center;
          z-index:2;
        }
        
      </style>
      <div class="infoblock">
        <div class="score">SCORE ${this.score}</div>
        <div class="lives">LIVES ${this.lives}</div>
      </div>
      <slot></slot>
    `
  }
}

export default customElements.define('invaders-game',Game)

//<invaders-alien xpos="200" ypos="50" type="alien1"></invaders-alien>