

import React, { Component } from 'react'

export default class Demo extends Component {

    handleEvent(){

            console.log('event handle in class method')

    }



  render() {
    return (
      <div>
            <button onClick={this.handleEvent}>Click Me</button>
        
      </div>
    )
  }
}
