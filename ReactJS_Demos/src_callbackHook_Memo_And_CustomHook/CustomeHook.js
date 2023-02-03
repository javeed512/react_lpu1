

import React from 'react'
import useCustomCounter from './useCustomCounter'





export default function CustomeHook() {
// using custome hook useCustomCounter();

       const data =     useCustomCounter();  // user-defined hook


  return (
    <div>

        <h1>Custom Count : {data.count}</h1>

        <button   onClick={data.handleIncrement}>Custome Counter</button>
      
    </div>
  )
}
