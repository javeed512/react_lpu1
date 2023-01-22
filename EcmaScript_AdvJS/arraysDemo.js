


const  nameList = ["King","Anmol cahoudry","Nikhil kumar","Gulabchand","Benjimen","Tom"];

const  salaries = new Array(4000,6000,3000,7000,2000,8000,1000);

function array1(){


       // console.log(nameList);

        


       // nameList.forEach( (data)=>{console.log(data)}  );

       //console.log(nameList.sort())

        console.log(nameList)

            //nameList.push("Javeed");

            //nameList.pop();

                nameList.splice(0,1);

            console.log(nameList)


        nameList.filter((data)=>{return data.length > 5;}).forEach((data)=>{console.log(data)})

        nameList.map((name)=>{ console.log("Mr."+name)});

}       salaries.map((sal)=>{ console.log("old "+sal); console.log("new "+(sal+1000) ) });


      let total =  salaries.reduce((s1,s2)=>{ return s1+s2  });

        console.log("Total sum of salaries "+total)