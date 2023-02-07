
   

const mysql= require('mysql2')
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
 
const app = express();


app.use(cors());
// parse application/json
app.use(bodyParser.json());

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"emp_db"
})

app.post("/create",(req,res)=>{
    const empId=req.body.empId;
    const empName=req.body.empName;
    const empSal=req.body.empSal;

      
    db.query("insert into employees(eid,ename,salary)  values(?,?,?)",[empId,empName,empSal],
    
    (err,result)=>{
            if(err){

                console.log(err);
            }

            else{

                    res.send('Record Inserted successfully.')

            }

    }
     );
});

app.listen(3001,()=>{
         console.log("Server Running Successfully on Port 3001")

})