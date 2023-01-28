

import React, { Component } from 'react'

export default class Unmount extends Component {

        componentDidMount(){

                console.log("Component Mounted")

        }


            componentWillUnmount(){


                    console.log('Component Unmounted..')

            }


  render() {
    return (
      <div>

        <h1>Component Mounted Now</h1>
        
      </div>
    )
  }
}
