// regular expression
let text = "im a traveller";
let n = text.search("traveller");
document.getElementById("demo").innerHTML = n;



// add event lister
document.getElementById("myBtn").addEventListener("CLICK",myFunction);
function myFunction(){
    document.getElementById("demo").innerHTML = "Hello World";
}
