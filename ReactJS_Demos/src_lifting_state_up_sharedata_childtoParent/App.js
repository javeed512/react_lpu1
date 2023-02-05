
import { useState } from 'react';
import './App.css';
import FormChild from './FormChild';

function App() {

   const[name,setName] = useState();

   const getData = (data)=>{

      console.log('data from child to parent',data)

        setName(data)

    }

  return (
    <>   
      <h1>Welcome to App Component</h1>
      <h2>Data from Child : {name}</h2>

        <FormChild  onSubmit={getData}/>

    </>

  );
}

export default App;
