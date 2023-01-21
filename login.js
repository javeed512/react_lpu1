


function   loginFunc(){


    var  listElements =  document.getElementsByName("uname");

          
    console.log(listElements[0].value)

      var password =      document.getElementById("pid").value;

    console.log(password)

             var city =       document.getElementById("city").value = "Hyderabad";

        console.log(city)

}



function  changeText(){


        document.getElementById("hid").innerText = "Hello Friends";

}




   var ann_func = function (){

            console.log("Anonymous function called..")

    }


     ann_func = function (){

        let x = 99;

        console.log("Annonymous changed..")

     }

       

     ann_func();

  
    const arrow =     ()=>{

            console.log("arrow function executed...")

         }

         arrow = ()=>{console.log("arrow changed")}

         arrow();