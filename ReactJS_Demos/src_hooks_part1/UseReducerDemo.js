



import React, { useReducer } from 'react'

const initialState = 0;


// reducer func takes 2 params , state,action
const reducer = (state,action)=>{

        switch(action){

            case 'increment' : return state + 1;
            case 'decrement' : return state - 1;
            case 'reset' : return initialState;
            default: return state;


        }


}




export default function UseReducerDemo() {



       const[count,dispatch]  =   useReducer(reducer,initialState);




  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={()=>{dispatch('increment')}}>Increment</button>
        <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('reset')}}>Reset</button>

       

      
    </div>
  )
}
