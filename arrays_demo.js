

var  list = ["King Khan","Smith","Tom","Ford","Scott"];

var arr = [10,20,30,40,50];

let   getList =  ()=>{


        console.log(list);
        console.log(list.length)

        list.forEach( function callback(name,i){ console.log(i +" "+ name)  })


    list.filter((name)=>{ return name.length > 4  }).forEach((name)=>{ console.log(name)})

    list.map((name)=>{ console.log(name +" "+name.length) });


  let sum =  arr.reduce((a,b)=>{return a+b;});


    console.log(sum)
}

getList();