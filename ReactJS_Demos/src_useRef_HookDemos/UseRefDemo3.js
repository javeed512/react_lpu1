

import React , {useRef} from 'react'



export default function UseRefDemo3() {
    const inputRef=useRef(null);

    const handleClick=()=>
    {
        inputRef.current.value="Alan";
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.style.bakcground = 'yellow';
       // inputRef.current.style.display="none";
    }
  
  
    return (
      <div>
       <input type="text" ref={inputRef}/>
       <button onClick={handleClick}>Handle Input</button>
      </div>
    )
}
