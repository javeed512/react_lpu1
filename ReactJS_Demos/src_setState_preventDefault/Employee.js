

import React, { Component } from 'react'

export default class Employee extends Component {

    constructor(props){
        super(props);

            this.state = {

                    eid:101,    
                    ename:"King",
                    salary: 50000,
                    job: this.props.job

            }
           // this.handleClick = this.handleClick.bind(this);

    }
    get(name){

            this.setState({ename:"Javeed Sir",job:"Trainer"});

        console.log("Welcome "+name)

    }

    handleClick = (e)=>{

        e.preventDefault();

            console.log(e)
            console.log('Event handled..');

            console.log(this)

            this.get(this.state.ename);
     }
  

    



      


  render() {
    return (
      <div>
        
 <h1>{this.state.eid}  {this.state.ename}  {this.state.salary}  {this.state.job}</h1>


        <h2>{this.props.job}</h2>


        <button onClick={this.handleClick}>Click Me</button> <br/><br/>


        <a href='http://www.google.com' onClick={this.handleClick}>Google</a> <br/><br/>



      </div>
    );
  }

}

