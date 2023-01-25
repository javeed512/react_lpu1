

import React, { Component } from 'react'

export default class Student extends Component {


    constructor(props){

        super(props);

        this.state ={

                id: 101,
                sname: "king",
                fee: this.props.amount



        }


      

    }


  render() {
    return (
      <div>
        <h1>Student Details</h1>
        <h2>{this.state.id} </h2>
        <h2>{this.state.sname} </h2>
        <h2>{this.state.fee} </h2>

      </div>
    )
  }
}
