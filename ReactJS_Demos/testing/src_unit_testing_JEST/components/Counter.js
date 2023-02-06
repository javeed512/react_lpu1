

import React, { useState } from 'react'

export default function Counter() {

    const [count,setCount] = useState(0);


    const increment = ()=>{

        setCount(count + 1)

    }

    const decrement = ()=>{

        setCount(count - 1)

    }


  return (
    <div>

        <button type="submit"  data-testid="plusId"   onClick={increment} className='btn btn-success'>Plus</button>
        <h1  data-testid="countId"  > {count} </h1>

        <button type="submit" data-testid="minusId"  onClick={decrement} className='btn btn-danger'>Minus</button>
      
    </div>
  )
}
