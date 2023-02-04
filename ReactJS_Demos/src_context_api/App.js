
import React from 'react';
import AComponent from './AComponent';
import './App.css';
import CComponent from './CComponent';



   export const  UserContext = React.createContext();

function App() {

  const price = 5000;

  return (
   
    <>


      <h1>Welcome to App Component</h1>


    <UserContext.Provider  value={price} >

             <AComponent/>

    </UserContext.Provider>




    </>
  );
}

export default App;
