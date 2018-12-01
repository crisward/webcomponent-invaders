import {LitElement, html} from '@polymer/lit-element'

class Game extends LitElement {

  constructor() {
    super();
    this.score = 0
  }

  static get properties(){
    return {
      score: { attribute: 'score' },
    };
  }

  addScore(points){
    this.score += +points
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
        }
        .score,.lives{
          color:white;
          font-size:40px;
          text-align:center;
          z-index:2;
        }
        
      </style>
      <div class="score">${this.score}</div>
      <slot></slot>
    `
  }
}

customElements.define('invaders-game',Game)

//<invaders-alien xpos="200" ypos="50" type="alien1"></invaders-alien>