


import React, { Component } from 'react'

export default class LoginUncontrolledForm extends Component {

        constructor(props){

                super(props);


                this.state = {

                        username:"",
                        password:""

                }

                    // create ref obj for username
                  this.userRef =  React.createRef();

                     // create ref obj for password
                     this.pwdRef =  React.createRef();

        }



            componentDidMount(){


                    this.pwdRef.current.focus();



            }
            


            handleSubmit = (e)=>{

                 e.preventDefault();

                    this.setState({username:this.userRef.current.value  , password:this.pwdRef.current.value});


            }


  render() {
    return (
      <div className='container col-lg-4' >


            <h1>Welcome :{this.state.username} with password: {this.state.password}</h1>

            <form  onSubmit={this.handleSubmit} >

            <div>UserName: <input type="text"  name="username"  className='form-control'  ref={this.userRef} /></div>
            <div>Password: <input type="text"  name="password"  className='form-control'  ref={this.pwdRef} /></div>

            <button type='submit' className='btn btn-success'>Login</button>



            </form>

        
      </div>
    )
  }
}
