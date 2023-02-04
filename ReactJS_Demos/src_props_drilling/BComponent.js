

import React from 'react'
import CComponent from './CComponent'

export default function BComponent(props) {
  return (
    <div>

        <h1>BComponent  : {props.data}</h1>

        <CComponent   data = {props.data} />
      
    </div>
  )
}
