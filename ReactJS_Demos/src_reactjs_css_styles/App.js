
import './App.css';

import style1 from './mystyles.module.css'

import styled from 'styled-components';  


function App() {

    const  mycolor = "orange";

    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

// styled component demo
    const Div = styled.div`  
    margin: 20px;  
    border: 5px dashed green;  
    &:hover {  
    background-color: ${(props) => props.hoverColor};  
    }  
    `;  

    const Paragraph = styled.p`  
    font-size: 25px;  
    text-align: center;  
    background-Color: lightgreen;  
    `;  

  return (
    <>
   
      <h1  >Welcome to App Component</h1>

      <h1 style={mystyle}>Hello Friends</h1>

      <h1 style={{color: mycolor}}>Happy Learning</h1>
        

        <h2 className={style1.mystyle} >This is Module.CSS Demo</h2>

        <p className={style1.parastyle} >This is my Paragraph</p>
        
      <br/><br/>

        <Div hoverColor="Orange">  
                 <Paragraph>Hello HitBullsEye!</Paragraph>  
            </Div> 



        </>


  );
}

export default App;
