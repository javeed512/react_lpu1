

import React from 'react'

import axios from 'axios';

export default function DeleteApi() {

    const deleteApi =  ()=>{

        axios.delete("http://localhost:3000/employees/105")
        .then((response)=>{ console.log("Delete Status ",response.status)})
        .catch((err)=>{ console.log(err)});



    }


  return (
    <div>
        <button onClick={deleteApi}>DeleteById</button>
      
    </div>
  )
}
