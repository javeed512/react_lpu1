

 import React, { useState } from 'react'
 
 export default function FetchApi() {

            const[count,setCount] = useState(0);

            const[data,setData]  = useState([]);

    const get = ()=>{

            fetch('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{ return response.json() } )
            .then((json)=>{  
                        console.log(json); 
                        setData(json);
                });
    }


    const increment =()=>{

            setCount(count+1);

    }


   return (
     <div>
       
        Count Value : {count}
        <h1>Fetch API CRUD Operations</h1>

        <h2>    {JSON.stringify(data)}   </h2>
            <br/><br/>

        <button  onClick={get}>GetUsers</button>  <br/><br/>

        <button onClick={increment}>Increment</button>

     </div>
   )
 }
 