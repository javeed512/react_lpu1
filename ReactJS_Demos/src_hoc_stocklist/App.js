
import './App.css';
import HocExample from './HocExample';
import StockListComponent from './StockListComponent';



const StockData = [

    {id:101,name:"TCS",price:900} ,
    
    { id:102, name:"Reliance" , price:500 },

    {id:103,name:"Google",price:1500} ,

    {id:104,name:"Facebook",price:1200} 


];


  const Stock =  HocExample(StockListComponent , StockData)


function App(props) {
  return (
    <>
   
      <h1>Welcome to App Component</h1>

      <Stock />




     {/* <h2>{props.data}</h2> */}

      </>

  );
}

// App =  HocExample(App,"javeed");

export default App;

