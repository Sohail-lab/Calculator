var a = prompt("Enter first number", "0");
var b = prompt("Enter second number", "0");
document.getElementById("num1-el").textContent=a
document.getElementById("num2-el").textContent=b

let temp=document.getElementById("sum-el")

function add(){
     temp.textContent="Result : "+a+b
}
function subtract(){
    temp.textContent="Result : "+(a-b)
}
function divide(){
    temp.textContent="Result : "+a/b
}
function multiply(){
    temp.textContent="Result : "+a*b
}

