

import  { useState } from 'react'

// this is not a react component , its a user-defined hooks  JS Func

export default function useCustomCounter() {
 

    const [count,setCount]=useState(0);

    const handleIncrement= ()=>
    {
        setCount(count + 1);
    }
    return {
        count,
        handleIncrement
    }


}
