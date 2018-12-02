import {LitElement, html} from '@polymer/lit-element'

class Game extends LitElement {

  constructor() {
    super();
    this.score = 0
  }

  static get properties(){
    return {
      score: { attribute: 'score',type: Number  },
      lives: { attribute: 'lives',type: Number  },
    };
  }

  addScore(points){
    this.score += +points
  }

  reduceLives(lives){
    this.lives -= +lives
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