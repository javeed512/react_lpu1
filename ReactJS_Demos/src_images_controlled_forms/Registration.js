

import React, { useState } from 'react'

export default function Registration() {

   


        const[user,setUser]  = useState({
                                id:"",
                                username:"",
                                password:"",
                                category:""

                            });


                         const [records,setRecords]= useState([]);

              const handleChange = (e)=> {

                console.log(e.target.value)

                    const   name = e.target.name;
                    const    value = e.target.value;

                            setUser({...user , [name]:value});

                 
              }   
              
              
               const handleSubmit = (e)=>{

                    e.preventDefault();
                     
                        const newRecord={...user, id:new Date().getTime().toString()}; 
                        setRecords([...records,newRecord]);
                  
                        console.log(user)
                        console.log(records)


// before next submit complete , we are removing existing data from state obj
                      setUser({username:"" , password:""}); 

                    

               } 




  return (
    <div>

        <h1>Welcome {user.username} , your password is {user.password}</h1>

            <form  className='container col-md-4' onSubmit={handleSubmit} >


<div className='form-group'>  
<label>UserName:</label> 
<input type="text"  className='form-control' name="username"  onChange={handleChange}    value={user.username}/> 
</div>

      
<div className='form-group'>   
 <label>Password:</label> 
 <input type="password" className='form-control' name="password"  onChange={handleChange}  value={user.password}/>
  </div>

<div>

<label htmlFor="category" className="mt-3">Category</label>
            <select className="form-control" name="category"
               value={user.category}
               onChange={handleChange} >
              <option value="">Select</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Academic">Academic</option>
            </select>




</div>


            <button type="submit" className='btn btn-primary'>Login</button>




            </form>
         

      
    </div>
  )
}
