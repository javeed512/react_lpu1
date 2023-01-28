



import React, { Component } from 'react'

// Lifecycle methods , Phase-1 Mounting process
export default class MountingDemo extends Component {


    constructor(props){
        super(props);

        console.log("Student constructor called , obj created")

        this.state = {

                color:"green"

        }

    }


        static getDerivedStateFromProps(props,state){

            console.log('getDeriveStateFromProps() is called..')

                return {color: props.favcolor }

        }


  render() {
    console.log('render() is called..')

    return (
      <div>
            <h1 style={{color:this.state.color}} >My Favourit Color is : {this.state.color}</h1>
      </div>
    )
  }


    componentDidMount(){

                // to get data from server set to the state

            console.log('student rendered and componentDidMount() called.')
    }


}
