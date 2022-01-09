// function one(){
//     console.log("I am nireesha");
// };
// function two(){
//     console.log("My age is 23");
//     return one;
// };
// function three(){
//     console.log("Myself");
//     return two;
// };
// var returenedvalue = three();
//  var returenedvalue = two();

 function one(){
    console.log("I am nireesha");
};
function two(){
    console.log("My age is 23");
    return one;
};
function three(){
    console.log("Myself");
    return two;
};
three()()();