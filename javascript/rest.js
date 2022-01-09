//  spreadoperator
 let a = [1,2,3,4]
let b = [10,20,30,40,...a]
console.log(b);

// restoperator
function add(a,...b){
console.log(a);
console.log(b);
};
add(10,20,30,40);

//  array destructing
var arr = [100,200,300,400]
[a,b,c,d] = arr;
console.log(c);

// object destructing
var obj ={
    name:"nireesha",
    age:23,
    salary:35000
};
let{name,age,salary:payment=40000}=obj;
console.log(payment);