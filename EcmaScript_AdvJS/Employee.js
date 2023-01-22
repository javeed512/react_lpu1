

 class Employee{

         empObj = {
                "eid":101,
                "ename":"King",
                "salary":12000,
                "job":"Manager"
          }


        constructor(){

            console.log('Employee object created..')
        }

   

       f1() {  //method

            console.log("f1 from Employee")
        
         }


}

const  emp = new Employee();

emp.f1();

console.log(emp.empObj);


