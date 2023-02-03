



import React, { useEffect, useRef, useState } from 'react'

export default function UseRefDemo2() {

    const[inputValue,setInputValue]  = useState("");


        const count = useRef(0);

    useEffect(()=>{

        count.current = count.current + 1;

        console.log('component mounted / updated');

    });


  return (
    <div>
      


    <input type="text"     onChange={(e)=>{ setInputValue(e.target.value);}}    />
    <h1>Count: {count.current}</h1>

    </div>
  )
}
