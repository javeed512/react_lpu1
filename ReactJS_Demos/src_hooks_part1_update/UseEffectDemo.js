

import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

           const[count,setCount] =  useState(0);


         
    const handleClick = ()=>{


        setCount(count+1);



    }


      useEffect(()=>{


                document.title = `You have clicked ${count} times`;

      });  



  return (
    <div>

        <h2>Count: {count}</h2>

        <button onClick={handleClick}>Count+</button>
      
    </div>
  )
}
