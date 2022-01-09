function callMom(){
setTimeout(() => {
    console.log('she calls mom');
    callniru();
},5000);
};
function callniru(){
    setTimeout(() =>{
        console.log("she calls niru");
    },2000);
};
callMom();
