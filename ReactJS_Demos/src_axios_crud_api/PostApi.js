

import React, { useState } from 'react'

import  axios from 'axios';

export default function PostApi() {

   //  const [emp,setEmp] = useState();  // emp is a state obj name

    
    const  add = ()=>{


          axios.post("http://localhost:3000/employees", 
          {
            "id": 108,
            "ename": "Benjamin",
            "salary": 90000
          })
          .then((response)=>{ console.log(response)})
          .catch((err)=>{ console.log(err)});



    }


  return (
    <div>
      
        <button onClick={add}>Add Data</button>


    </div>
  )
}
