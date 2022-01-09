// document.write('welcome people');
// var ele = document.createElement('h1');
// document.body.append(ele);
// ele.innerText = "hi guys";
// ele.textContent = 'welcome';
// ele.innerHTML = '<a href="#">Google</a>';
// ele.innerHTML = 'hello guys';
// setInterval(() => {
//     var time = new Date().getTime();
//     ele.innerText = time;
//     },3000)
// var a = document.getElementById('heading');
// a.style.color = "red";
// a.innerText = "Iam ID example";
// a.remove();
// var b = Array.from(document.getElementsByClassName('nirus'))
// b.forEach(changeColor);
// function changeColor(ele){
//     ele.style.color = "blue"
// }

// var b = Array.from(document.getElementsByClassName('nirus'))
// var b = document.getElementsByTagName('')
// b.forEach(changeColor);

// function changeColor(ele){
//     setInterval(() => {
//     var x = Math.random();
//     if(x>0 && x<0.25){
//     ele.style.color = "pink";
//     }else
// if(x>0.25 && x<0.5){
//     ele.style.color = "red";
// }else
//  if(x>0.5 && x<0.75){
//     ele.style.color = "green";
// }else
// {
//     ele.style.color = "black";
// }
    
// },1000);}

// var queryEle = document.querySelector('div')
// console.log(queryEle);
// queryEle.innerText = "Hello";


// var queryEles = Array.from(document.querySelectorAll('div'))
// console.log(queryEles);

// queryEles.pop();
// console.log(queryEles);

// queryEles.forEach((ele) => {
//     ele.style.color = "green";
// })
// var unorderedList = document.getElementById('unorder');
// var children = unorderedList.childNodes;
// console.log(children);

function removeSomeone(){
    var unList = document.getElementById('unorder');
    var children = unList.childNodes;
    console.log(children);
    unList.removeChild(unList.lastElementChild)
    
};