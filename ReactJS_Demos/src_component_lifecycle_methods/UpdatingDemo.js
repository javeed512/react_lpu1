

import React, { Component } from 'react'

export default class UpdatingDemo extends Component {

    constructor(props) {
        console.log("App-constructor called");
        super(props);
    
        //initialize the state
        this.state =
        {
            color:"green",
            name: "javeed"
        };
      }
      static getDerivedStateFromProps(props, state) {
        console.log("App-getDerivedStatedFromProps called") 
        // update the state or null to update nothing.
        return {color: state.color};
      }
      changeColor = () => {
       
                this.setState({name:"King"});
                this.setState({color:"blue"});
      }
      shouldComponentUpdate(nextProps,nextState)
      {
        console.log("App- shouldcomponentupdate called ",nextState);
        return true;
      }
       //this method runs before update
       getSnapshotBeforeUpdate(prevProps,prevState)
       {
           console.log("App - get snap shot before update ");
           console.log(prevProps,prevState);
           return true;
       }
    
       //this method runs after update
       componentDidUpdate(prevProps,prevState,snapshot)
       {
           console.log("App - component did update ");
           console.log(prevProps,prevState,snapshot);
       }
      render() {
        console.log("App-render called");
        return (
          <div>
            <h2>{this.state.name}</h2>
          <h1  style={{color:this.state.color}}  >My Favorite Color is {this.state.color}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }


 
}
