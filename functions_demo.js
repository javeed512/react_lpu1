// normal func
function fun1(){

    console.log("this is fun1() normal function");

}

// anonymous func

 const f2 = function(){

    console.log("anonymous function");

 }

 // arrow function 

 let f3 =   ()=>{

            console.log("arrow functions");


    }



var  names = ["king","smith","kumar","rajendra prasad","ronaldo messi"];


let get = (name)=>{
    console.log(name)
};



 function  test(){

    /*  for(let i=0 ; i < names.length ; i++){

                 console.log(names[i]);

         }
         */


        names.forEach(get);  //HERE get func is known as callback func used as param


        names.filter((data)=>{ return data.length > 6}).forEach((x)=>{console.log(x.toUpperCase())});

 }



let  add = (a,b)=>{

        return a+b;

}

 const result = add(10,30);

console.log("Result is : "+result);






