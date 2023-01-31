

import React, { useState } from 'react'

export default function Form() {


    const[userData,setUserData] = useState({

            username:"",
            password:""

    });


    const  userRef = React.createRef();

    
    const  pwdRef = React.createRef();


    const handleSubmit = (e)=>{

     console.log(userRef.current.value)

            e.preventDefault();


        
            setUserData({username:userRef.current.value,password:pwdRef.current.value})

    }


  return (
    <div>

        <h1>Welcome {userData.username } and {  userData.password}</h1>

<form  className='container col-md-4' onSubmit={handleSubmit} >

<div>UserName: <input type="text"  name="username"  className='form-control'  ref={userRef} /></div>
<div>Password: <input type="text"  name="password"  className='form-control'  ref={pwdRef} /></div>

<button type='submit' className='btn btn-success'>Login</button>



</form>

      
    </div>
  )
}
