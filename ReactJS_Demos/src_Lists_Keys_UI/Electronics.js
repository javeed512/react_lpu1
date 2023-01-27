

import React from 'react'

export default function Electronics(props) {
  return (
    <div>
        <li style={{ color:"red",fontSize:10}}  >  {props.pname}  {props.rate}</li>
   
    </div>
  )
}
