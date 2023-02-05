

import React, { useState } from 'react'

export default function FormChild(props) {

    const [name,setName]  = useState("");

    const handleChange = (e)=>{

            setName(e.target.value);

    }
    const     handleSubmit = (e)=>{
                e.preventDefault();

               props.onSubmit(name);         

        }

  return (
    <div>

        Data in Child : {name}
        <form  onSubmit={handleSubmit}>

        User Name: <input type="text"  onChange={handleChange} />
        <button  type='submit' >Send Data</button>

        </form>
 
    </div>
  )
}
