

import React, { Component } from 'react'

export default class Dept extends Component {

    state={
		name: "Alan",
		id:this.props.dno
	}
	handleClick=()=>
	{
		this.setState(function (state,props)             // here passing callback which can be anonymous func or arrow func
       		 {
                console.log(state)
                console.log(props)
            return {name:"Kelvin",id:state.id+1}
        	});
	}
  render() {
	return (
	  <div>
		  <h1>Name: {this.state.name}</h1>
		  <h1>Id: {this.state.id}</h1>
		  <button onClick={this.handleClick}>clickMe</button>
	  </div>
	)
  }
  }

