

import React from 'react'

export default function Login() {
  return (
    <div className="container col-md-4" >

        <form>

        UserName: <input type="text"  name="uname" className='form-control' />

        Password: <input type="password"  name="pwd" className='form-control' />

            <button type="submit"   className='btn btn-success'>Login</button>



        </form>


      
    </div>
  )
}
