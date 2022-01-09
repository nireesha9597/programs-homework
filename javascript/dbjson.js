// var  b =fetch("./db.json").then((res) => {
//     res.json().then((data) =>{
//         console.log(res);
//     })
// // })
// fetch('https://api.github.com/users').then((res) => {
//    res.json().then((data) => {
//        console.log(data);
//        console.log(data[0].type);
//    })
// })
// var car = {
//     brand:"audi",
//     model:2019,
//     color:"red",
//     series:"Q5"
// };
// var store = JSON.stringify(car);
// // console.log(store);

// var a = localStorage.setItem("car",store);
// var res = JSON.parse(localStorage.getItem('car'))
// console.log(res);

// shallow copy
// let bike = {
//     name ="vespa",
//     color = 'black',
//     model = "2020w"
// };
// let bike2 =bike;
// let bike2 =bike;
// console.log(bike2);

// bike2.model = ".2021w"
// bike2.color = 'white'
// console.log(bike);
// console.log(bike2);
// promises
// let ans = confirm ('Did greeshma agree in marriage or not?')
// let gift = new Promise((resolve,reject)=>{
//     if(ans==true){
//     resolve('Agree she is fall in love that person')
// }
// else {
//     reject('she is not agree becz she dont interest mrg')
// }
// });
// console.log(gift);
// gift.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
function createData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=> {
     console.log("createData");
        },5000);
    })
};

 async function showData(){
    console.log('process started');
   await  createData().then((res)=>{
 console.log(res);
   }, 2000)
 };
 showData();
//   another method
async function showData(){
    console.log('process started');
try{
    let  res = await createData();
    console.log(res);
}
catch(err){
    console.log(err);
}
setTimeout()=>{

},2000)












