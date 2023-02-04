

import React from 'react'
import BComponent from './BComponent'

export default function AComponent(props) {
  return (
    <div>
        <h1>AComponent :{props.data}</h1>

        <BComponent  data = {props.data} />
        
      
    </div>
  )
}
