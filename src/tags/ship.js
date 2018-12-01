import { component,useState,useEffect } from '@matthewp/haunted'
import { html } from 'lit-html'

customElements.define('invaders-ship',component(el=>{
  const [deltax, setDeltax] = useState(0)
  const [xpos,setXpos] = useState(35)

  const handleKey = (e =>{
    if(e.key=="ArrowRight") setDeltax(5)
    if(e.key=="ArrowLeft") setDeltax(-5)
  })

  useEffect(()=>{
    document.addEventListener("keyup",setDeltax.bind(this,0))
    document.addEventListener("keydown",handleKey)
    if(deltax!=0){
      //requestAnimationFrame(()=>{
        let newpos = xpos+deltax
        if(newpos > 0 && newpos < 740){
          setXpos(xpos+deltax)
        }
      //})
    }
    return ()=>{
      document.removeEventListener("keyup",setDeltax.bind(this,0))
      document.removeEventListener("keydown",handleKey)
    }
  })

  return html`
    <style>
      .ship{
        display:block;
        background:yellow;
        width:80px;
        height:30px;
        position:absolute;
        bottom:0px;
        z-index: 1;
        transform: translateZ(0.0001px);
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
    <div class="ship" style="transform: translateX(${xpos}px)"></div>
  `
}))