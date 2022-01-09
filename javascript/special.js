// closures
// function outer(){
//     var out = "I am nireesha"
//     console.log("outer function");
//     console.log(out);
//     inner();
//     function inner(){
// var int = "My age is 23"
// console.log("inner function");
// console.log(int);

//     };
// };
// outer();

// function callMom(func1,func2){
//     setTimeout(() => {
//         console.log('she calls mom');
//         func1(func2);
//     }, 5000);
// };
// function callDad(func3){
//     setTimeout(() => {
//         console.log('she calls dad');
//         func3();
//     }, 3000);
// };
// function callniru(){
//     setTimeout(() => {
//         console.log('she calls niru');
//     }, 1000);

// };
// callMom(callDad,callniru)

// function add(a,b){
// return a+b;
// };
// function sub(a,b){
//     return a-b;
// };
// function mul(a,b){
// return a*b;
// };
// function opt(a,b,opt){
//     return (a,b);
// };
// var result = opt(10,20,opt);
// console.log(result);

function add(a,b){
    return a+b;
    };
    function sub(a,b){
        return a-b;
    };
    function mul(a,b){
    return a*b;
    };
    function opt(a,b,opt,opt2,opt3){
        var x =opt(a,b);
        var y =opt(a,b);
        var z =opt(a,b);
        return[x,y,z]
    };
    var result = opt(10,20,add,sub,mul);
    console.log(result);


