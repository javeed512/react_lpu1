

import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function Contact() {

                    let {isValid}  = false;

                 let { name , age }=   useParams();

                 const navigate = useNavigate();


   const   handleClick = ( )=>{


                navigate('/home');


      }           

  return (

        
  
  <div>

        <h2>Contact us on : 040-99887766</h2>
        <h3>Thank You , {name} for contacting us : {age}</h3>

        <button onClick={()=>{ navigate('/hello')  }}>Goto Hello</button> <br/><br/>

        <button onClick={handleClick}>Back To Home</button>

        {  true ? <Navigate to="/about" /> :    <Navigate to="/login" />}
      
    </div>
  )
}
