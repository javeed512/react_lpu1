


import React, { Component } from 'react'

export default class UserListComponent extends Component {


    tabRow(){

        if(this.props.data instanceof Array){

     return this.props.data.map((object,i)=>{
                  console.log(object)

                return <tr><td>{object.id}</td> <td>{object.name}</td> <td>{object.amount}</td></tr>

                  });


        }


}



  render() {
    return (
        <div className='container col-md-4'>
        <table  className='table table-dark'>

        <thead>
            <tr> <td>Id</td> <td>User Name</td> <td>Invest Amount</td></tr>
        </thead>

        <tbody>
            {this.tabRow()}

        </tbody>



        </table>

        
      </div>
    )
  }
}
