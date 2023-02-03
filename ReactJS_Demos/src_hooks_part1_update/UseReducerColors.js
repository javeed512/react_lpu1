

import React, { useReducer } from 'react'

const initialStateValue = 'yellow';

const  reducer = (state,action)=>{
        switch(action){

                case 'green': return state = 'green';
                case 'red': return  state = 'red';
                case 'blue': return state = 'blue';
                default: return initialStateValue;
        }

}

export default function UseReducerColors() {
    
    const[mycolor,dispatch] =  useReducer(reducer,initialStateValue);

  return (
    <div>
      
        <h1 style={{backgroundColor:`${mycolor}`}} >My Favourite Color is: {mycolor}</h1>

        <button onClick={ ()=>{dispatch('green')}  }>Green</button>
        <button onClick={ ()=>{dispatch('red')}  }>Red</button>
        <button onClick={ ()=>{dispatch('blue')}  }>Blue</button>
        <button onClick={ ()=>{dispatch('reset')}  }>Reset</button>

    </div>
  )
}
