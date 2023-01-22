

const obj = {firstName:'Javeed',lastName:'Mohammed Husnuddin',age:30}


function   demo(){ // before ecma script 

const f = obj.firstName

console.log(f)

}

demo();


function  destructure(){ // from ecma onwards

    const{firstName:f,lastName:l} = obj


        console.log(f)
        console.log(l)

}

destructure();