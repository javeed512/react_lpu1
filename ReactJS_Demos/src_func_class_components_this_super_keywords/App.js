
import './App.css';
import Employee from './Employee';
import Header from './Header';
import Hello from './Hello';
import Product from './Product';

export default function App() {
  return (
   
    <>
       <Header></Header> 
      <h1>Welcome to App Component</h1>
      <Employee  eid="101"  ename="king"></Employee>

      <Product  pid="201" pname="mobile" price="12000" />

      <Hello  id={99}  name="javeed" />
  </>
  );
}

//export default App;
