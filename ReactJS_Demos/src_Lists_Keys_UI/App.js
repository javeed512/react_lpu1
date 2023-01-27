
import Address from './Address';
import './App.css';
import NumberList from './NumberList';
import Products from './Products';

function App(props) {
  return (
   
      <>
      <h1>Welcome to App Component</h1>

      <NumberList  />


        <Products city="Delhi"> 
          
                <Address />
           </Products>

     <h1>{props.children}</h1>



    </>
  );
}

export default App;
