

import React from 'react'
import Electronics from './Electronics';

export default function Products(props) {

    const products = [

            {id:101,name:"Mobile",price:12000},
            {id:102,name:"Laptop",price:42000},
            {id:103,name:"Charger",price:1000},
            {id:104,name:"PowerBank",price:3000},
            {id:105,name:"Keyboard",price:900}


    ];


  return (
    <div>

      <h1>Product List : {props.city}</h1>

        <h1>Children: {props.children}</h1>

        <ul>

          { products.map( 
            (item)=>{ 
                    return    <li key={item.id}>{item.name}</li>
                    
                    } 
            
            
            ) }


        </ul>

                        <br/><br/>

                    <ol>

                        { products.map(

                            (item)=>{

                                    return <Electronics key={item.id}   pname={item.name}  rate={item.price}/>

                            }




                        )}



                    </ol>



    </div>
  )
}
