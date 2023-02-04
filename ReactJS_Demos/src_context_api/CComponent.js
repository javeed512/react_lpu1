

import React from 'react'
import { UserContext } from './App'

export default function CComponent() {
  return (
    <div>
        
        
        <UserContext.Consumer>
       
            {

                myprice=>{

                    return <h1>My Price from App.js : {myprice}</h1>
                }


            }

        </UserContext.Consumer>
      
    </div>
  )
}
