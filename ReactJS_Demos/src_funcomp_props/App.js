
import React from 'react';
import './App.css';
import Student from './Student';

function App(props) {

  let amount = 12000;
  return (
   
    <React.Fragment>
      <h1>Welcome to App Component</h1>
      <h2>Hi Friends</h2>
      <h3>App Props :{props.id}</h3>

      <Student sid = {101}  fee={amount}> </Student>
  </React.Fragment>

  );
}

export default App;
