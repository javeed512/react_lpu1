
import { useCallback, useState } from 'react';
import './App.css';
import Button from './Button';
import CustomeHook from './CustomeHook';
import Student from './Student';
import Title from './Title';

function App() {


    const[age,setAge] = useState(18);
    const[salary,setSalary] = useState(1000);


    const incrementAge =   useCallback(()=>{

          setAge(age + 1)
  
  
      },[age]);


      
    const incrementSalary = useCallback(()=>{

     setSalary(salary + 1000 )


            },[salary]);





  return (
   <>
      <h1>Welcome to App Component !</h1>

      <Title />

    <Student  text="age" count = {age}  />
    <Button  handleClick={incrementAge} >Increment Age</Button> 

    <Student  text="salary" count = {salary}  />
    <Button  handleClick={incrementSalary} >Increment Salary</Button> 


<h3>Custome Hook Below</h3>


    <CustomeHook />


    </>
  );
}

export default App;
