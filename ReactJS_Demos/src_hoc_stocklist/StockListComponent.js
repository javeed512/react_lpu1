

import React, { Component } from 'react'
import TableRow from './TableRow';

export default class StockListComponent extends Component {

        constructor(props){

            super(props)

        }

        tabRow(){

                if(this.props.data instanceof Array){

             return this.props.data.map((object,i)=>{
                          console.log(object)

                        return <TableRow  obj={object}  key={i} />;

                          });


                }


        }


  render() {
    return (
      <div className='container col-md-4'>
        <table  className='table table-dark'>

        <thead>
            <tr> <td>Id</td> <td>Name</td> <td>Price</td></tr>
        </thead>

        <tbody>
            {this.tabRow()}

        </tbody>



        </table>

        
      </div>
    )
  }
}
