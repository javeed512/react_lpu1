
import './App.css';
import Header from './Header';
import Login from './Login';
import Products from './Products';

function App() {

  



  return (
   
  <>

      <Header />

      <h1 className='alert alert-success'>Welcome to App Component</h1>

      <h2 className='alert alert-warning'>Hello Friends</h2>

      <Products />


      <button type="submit" className='btn btn-primary'  >Button1</button>
      <button type="submit" className='btn btn-success'  >Button1</button> 
      <button type="submit" className='btn btn-danger'  >Button1</button>
      <button type="submit" className='btn btn-warning'  >Button1</button>


      <Login />

    </>
  );
}

export default App;
