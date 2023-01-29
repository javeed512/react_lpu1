

import React from 'react'

import axios from 'axios'

export default function PutApi() {

    const update = ()=>{

        axios.put("http://localhost:3000/employees/108", 
        {
          "id": 108,
          "ename": "Benjamin Vanlalduhkima",
          "salary": 99000
        })
        .then((response)=>{ console.log(response)})
        .catch((err)=>{ console.log(err)});





    }


  return (
    <div>
      
    <button onClick={update}>Update</button>

    </div>
  )
}
