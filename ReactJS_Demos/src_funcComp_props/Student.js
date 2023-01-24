

// student function component

import PropTypes from 'prop-types'


function Student(props){

    let name = "Javeed";


    function myfunc(){

        console.log('myfunction is called..')

    }

return(


    <>
    <h1>Id:{}  and Name:{}</h1>

        <h1>This is Student Func Component  </h1>
        <h2>Hello : {name}</h2>
        <h3>Marks: {50+50}</h3>
        <h4>Num : {Math.floor(Math.random() * 100)}</h4>
    
        <button type="button"  onClick={myfunc} >Click</button>

        <h1>Student Details: Sid: {props.sid} and Sname: {props.sname} </h1>

        <h2>Fee: {props.fee}</h2>


    </>

);


}


Student.propTypes = {

    sid: PropTypes.number.isRequired, // isRequired = mandatory
    sname: PropTypes.string,
    fee: PropTypes.number


}


Student.defaultProps = {

    sid: 99,
    sname:"King"


}


export default Student;