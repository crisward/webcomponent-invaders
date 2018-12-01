export default ({html, component, useState, useEffect })->

  # Example using buttons to update state
  customElements.define 'duo-counter',component (el)->
    [count, setCount] = useState(+el.getAttribute('value') || 0) 
    [increment, setIncrement] = useState(0) 
    
    useEffect ->
      document.addEventListener "mouseup",setIncrement.bind(@,0)
      document.addEventListener "touchend",setIncrement.bind(@,0)
      if increment!=0
        timeout = setTimeout ->
          setCount(count+increment)
          clearTimeout(timeout)
        ,100
      -> 
        document.removeEventListener "mouseup",setIncrement.bind(@,0)
        document.removeEventListener "touchend",setIncrement.bind(@,0)

    html"""
      <style>
        button{
          font-size:16px;
          padding:10px 15px;
          border-radius:4px;
          border:1px solid #ccc;
          outline:0px;
          background:linear-gradient(#fff,#eee);
          box-shadow: inset 0 0px 4px rgba(0,0,0,0);
          transition:0.2s all;
        }
        button:active{
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.3)
        }
        h2{
          padding:0;
          margin:0 0 15px 0;
        }
        .wrap{
          border-radius:5px;
          box-shadow:0 2px 5px rgba(0,0,0,0.5);
          padding:20px;
          text-align:center;
          display:inline-block;
          margin:5px;
        }
      </style>
      <slot></slot>
      <div class="wrap">
        <h2>#{count}</h2>
        <button type="button" @mousedown=#{(e)-> setIncrement(-1)} @touchstart=#{(e)-> e.preventDefault(); setIncrement(-1)}>&minus;</button>
        <button type="button" @mousedown=#{(e)-> setIncrement(+1)} @touchstart=#{(e)-> e.preventDefault(); setIncrement(+1)} >&plus;</button>
      </div>
    """