

import React, { useState } from 'react'

export default function Get() {


             const[data,setData] =   useState([]);



             // htt get using fetch() api
    const getApi = ()=>{

                fetch("http://localhost:3000/employees")
                .then((response)=>{ return response.json()})
                .then( (json)=>{ 
                    console.log(json);
                    setData(json)
                
                })

    }

        // http post using fetch() api
  const  addApi = ()=> {
        fetch("http://localhost:3000/employees" , {

                method:'POST',
                body: JSON.stringify({
                    "id":105,
                    "ename":"Nikhil",
                    "salary": 80000
                  }),
                headers:  {"Content-Type":'application/json'}

        })
        .then( (res)=>{ return res.json()})
        .then( (data) =>{console.log(data)})

    }

   // http post using fetch() api
   const  updateApi = ()=> {
    fetch("http://localhost:3000/employees/105" , {

            method:'PUT',
            body: JSON.stringify({
                "id":105,
                "ename":"Mr.Nikhil Kumar",
                "salary": 120000
              }),
            headers:  {"Content-Type":'application/json'}

    })
    .then( (res)=>{ return res.json()})
    .then( (data) =>{console.log(data)})

}

    const  deleteApi = ()=>{
      
            fetch("http://localhost:3000/employees/105" , {
        
                    method:'DELETE',
            })
            .then( (res)=>{ console.log('record deleted')})
            //.then( (data) =>{console.log(data)})



    }




  return (
    <div>
            <h1>{JSON.stringify(data)}</h1>

        <button  onClick={getApi}>Get Api</button> <br/>


        <button onClick={addApi}>Add Data</button> <br/> <br/>

        <button onClick={updateApi}>Update Data</button> <br/> <br/>

        <button onClick={deleteApi}>Delete Data</button> 


    </div>
  )
}
