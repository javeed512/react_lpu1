

import React from 'react'

export default function NumberList() {

    const numbers = [101,102,103,104,105];

    const listItems = numbers.map( (num)=>{

          return  <li>{num}</li>

    } );


    const products = [

        {id:101,name:"Mobile",price:12000},
        {id:102,name:"Laptop",price:42000},
        {id:103,name:"Charger",price:1000},
        {id:104,name:"PowerBank",price:3000},
        {id:105,name:"Keyboard",price:900}


];


        const tableRows = products.map((prod)=>{

            return <tr> <td>{prod.name}</td> <td>{prod.price}</td> </tr>

        });

        const mybuttons = products.map((prod)=>{

                return <button>{prod.name}</button>

        });


  return (
    <div>
      
    <ul>{listItems}</ul>  <br/><br/>

    <table border="1" >{tableRows}</table> <br/><br/>

    {mybuttons}

    </div>
  )
}
