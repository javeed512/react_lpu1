
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber} from "./actions/index";

function App() {

  

  const myState=useSelector((state)=> state.changeTheNumber);
  const dispatch=useDispatch();

  return (
    <>
        <div className="container">
            <h1>Increment/Decrement Counter</h1>
            <h3>React and Redux</h3>

         <div className="quantity">
          <a className="quantity_minus" title="Decrement"   onClick={()=>{dispatch(decNumber())}}  ><span> - </span></a>
        <input name="quantity" type="text" className="quantity_input" value={myState}/>
           <a className="quantity_plus" title="Increment" onClick={()=>{dispatch(incNumber())}}    ><span> + </span></a>
         </div>

        </div>

     <div className='col-md-4'>   

<button  className='btn btn-danger' onClick={()=>{dispatch(decNumber())}} >Minus</button>  <br/>
Value: <input className='form-control' value={myState}/>
<button  className='btn btn-success'  onClick={()=>{dispatch(incNumber())}} >Plus</button>  <br/>

      </div>


    </>
  )

}

export default App;
