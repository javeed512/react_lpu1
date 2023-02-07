

import React, { Component } from 'react'
import axios from 'axios';

export default class FormComponent extends Component {
 
    constructor(props)
    {
        super(props);

        this.state={
            empId:"",
            empName:"",
            empSal:""
        }
    }

    handleChange=(e)=>
    {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit= (e)=>
    {
            e.preventDefault();
    

            console.log(this.state)

            //axios to post the data
            axios.post("http://localhost:3001/create",this.state)
            .then(()=>
            {
                console.log("success");
                alert('record inserted successfully')
            });
            this.setState({empId:"",empName:"",empSal:""});
    }

  render() {
    const {empId,empName,empSal}= this.state;
    return (
       
      <div className='container mt-5'>
          
          <div className="row">
          
          <div className="col-sm-8">
          <h2 className='text-center text-decoration-underline'>Enter Employee Details</h2>   
          <form onSubmit={this.handleSubmit}>
              <label htmlFor='empId' className='mt-3'>Employee Id:</label>
                  <input type="text" name="empId" className='form-control'
                  value={empId}
                  onChange={this.handleChange}/>

              <label htmlFor='empName' className='mt-3'>Employee Name:</label>
                  <input type="text" name="empName" className='form-control'
                  value={empName}
                  onChange={this.handleChange}/>
              
              <label htmlFor='empSal' className='mt-3'>Employee Sal:</label>
                  <input type="text" name="empSal" className='form-control'
                  value={empSal}
                  onChange={this.handleChange}/>
              
              
              <button type="submit" className='btn btn-primary w-100 mt-3'>submit</button>
          </form>
          </div>
          </div>
      </div>
    )
  }
}
