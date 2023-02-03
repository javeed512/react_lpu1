
import { useState } from 'react';
import './App.css';
import UseEffectDemo from './UseEffectDemo';
import UseReducerColors from './UseReducerColors';
import UseReducerDemo from './UseReducerDemo';


function App() {

        const  nameVariable =          useState('javeed');

        const  [city,setCity] = useState('hyderabad');


  const updateStateFunc = ()=>{


      nameVariable[1]('king');

      setCity('Delhi');

  }


  return (
   
    <>

 
      <h1>Welcome to App Component</h1>

      <h1>Name: {nameVariable[0]}</h1>

      <h1>City: {city}</h1>

      <button onClick={updateStateFunc}>Update</button>

      <h2>Use Effect Demo Below</h2>

      <UseEffectDemo />

      <h2>Use Reducer Demo</h2>


      <UseReducerDemo />

      <h2>Reducer Demo with Diff Background Colors</h2>

    <UseReducerColors />

    </>
  );
}

export default App;
