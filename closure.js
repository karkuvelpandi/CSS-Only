
let a=45

function display(){
    console.log(a);
}
display()


function out(a,b){
   
    function inner(){
         console.log(a+b);
    }
    inner()

}
out(10,20)



let result=(a,b,callback)=>{
    console.log(a*b);
      callback(a,b)
}
let add=(a,b)=>{
      console.log(a+b);
}

result(10,15,add)