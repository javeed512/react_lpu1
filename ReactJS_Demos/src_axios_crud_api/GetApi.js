


import React, { useState } from 'react'

import axios from 'axios';

export default function GetApi() {

              const[empList,setEmpList] =  useState([]);


        const get = ()=>{

                axios.get("http://localhost:3000/employees")
                .then((response)=>{ 
                    console.log(response.data)
                    setEmpList(response.data);

                })
                .catch( (err)=>{ console.log(err)});  




        }



  return (
    <div>

        <h1>{JSON.stringify(empList)}</h1>

    <table border="1">
        {empList.map((emp)=>{ 

        return    <tr> <td>{emp.id}</td> <td>{emp.ename}</td> <td>{emp.salary}</td> </tr>

        })}
      </table>
    <button onClick={get}>GetAll</button>

    </div>
  )
}
