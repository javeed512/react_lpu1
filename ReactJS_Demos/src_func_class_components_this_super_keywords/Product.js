import { Component } from "react";


export default class  Product  extends Component {

        constructor(){

                    // Component();
                console.log('Product() executed..')

        }


    render(){


            return(

                <>
            <h1>This is Product class Component</h1>
            <h2>Pid: {this.props.pid}   PName: {this.props.pname}   Price: {this.props.price}</h2>
                </>
            );



    }



}

//export default Product;