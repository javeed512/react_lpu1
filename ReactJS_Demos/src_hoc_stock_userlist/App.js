
import './App.css';
import HocExample from './HocExample';
import StockListComponent from './StockListComponent';
import UserListComponent from './UserListComponent';



const StockData = [

    {id:101,name:"TCS",price:900} ,
    
    { id:102, name:"Reliance" , price:500 },

    {id:103,name:"Google",price:1500} ,

    {id:104,name:"Facebook",price:1200} 


];

  const UserData = [

    {id:201,name:'king',amount:90000},
    {id:202,name:'smith',amount:50000},
    {id:203,name:'tom',amount:60000},
    {id:204,name:'ford',amount:30000}



  ];




  const Stock =  HocExample(StockListComponent , StockData)

   const Users =             HocExample(UserListComponent, UserData);


function App(props) {
  return (
    <>
   
      <h1>Welcome to App Component</h1>

      <Stock  />

      <Users />


     {/* <h2>{props.data}</h2> */}

      </>

  );
}

// App =  HocExample(App,"javeed");

export default App;

