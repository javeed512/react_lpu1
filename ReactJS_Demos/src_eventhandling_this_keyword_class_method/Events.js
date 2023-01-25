
import React from 'react'

export default function Events() {


    function  add(a,b){

            let res = a+b;
            console.log("addition is "+res)


    }


    function  addHandle(){

        add(3,4);

    }

    function handleClick(){

            console.log('button clicked')

    }



  return (
    <div>
      
        <button  onClick={handleClick}>Button1</button>

        <button  onClick={addHandle}>Add</button>

    </div>
  )
}
