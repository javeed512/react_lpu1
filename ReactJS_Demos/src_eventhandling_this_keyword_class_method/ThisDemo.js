

import React, { Component } from 'react'

export default class ThisDemo extends Component {

    constructor(){
            super();

            this.handle = this.handle.bind(this);

    }

        handle(){

               

                console.log('button clicked hanlde() called  ',this);


        }

        handle2 = ()=>{

                console.log('handle2 is called. ',this);


       }

  render() {
    return (
      <div>
        
            <button onClick={this.handle}>Call Handle</button> <br/><br/>

            <button onClick={this.handle2}>Call Handle2</button>


      </div>
    )
  }
}
