


import React from 'react'

export default function Products() {

    const products = [

        {id:101,name:"Mobile",price:12000},
        {id:102,name:"Laptop",price:42000},
        {id:103,name:"Charger",price:1000},
        {id:104,name:"PowerBank",price:3000},
        {id:105,name:"Keyboard",price:900}
    
    
    ];
    


  return (
    <div>

                <table className='container  col-lg-4   table table-bordered table-dark'>
                <tr style={{backgroundColor:"red"}}><th>Id</th> <th>Name</th>  <th>Price</th> </tr>
                    { products.map( 

                            (product)=>{
                            
                          return  <tr> 
                                <td>{product.id}</td>
                                 <td>{product.name}</td> 
                                  <td>{product.price}</td>
                           </tr>}


                    ) }


                </table>


    </div>
  )
}
