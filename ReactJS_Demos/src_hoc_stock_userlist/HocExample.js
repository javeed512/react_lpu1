

import React, { Component } from 'react'

export default function HocExample(HocComponent,datalist) {
 
        return class  extends  Component{

                        constructor(props){
                                super(props)

                                this.state = {


                                        value : datalist

                                }



                        }



                render(){


                        return( 
                            <>

                                <h1>hi from HOC</h1>
                        <HocComponent data = {this.state.value} {...this.props} />

                       

                        </>
                        
                        );

                }

        }



}



