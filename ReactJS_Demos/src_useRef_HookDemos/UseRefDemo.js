

import React, { useRef, useState } from 'react'

export default function UseRefDemo() {

        const[name,setName]  = useState('javeed');

          const ref =  useRef();


     const     updateWORender = () =>{

              //  setName('King');
              ref.current = name;

            console.log(ref.current)

            ref.current = 'king khan';

            console.log(ref.current)

          }


  return (
    <div>
      
        <h2>Name : {name}</h2>
        <button onClick={updateWORender}>Update</button>


    </div>
  )
}
