
function calculate(){
let num1= Number(prompt("enter the number 1: "));
let num2= Number(prompt("enter the number 2: "));
sum(num1, num2);
sub(num1,num2);
product(num1,num2);
division(num1,num2);

}

function sum(a,b){
    document.getElementById("results").innerHTML=`<p>The sum is: ${a+b}</p>`;
    
}

function sub(a,b){
    document.getElementById("results").innerHTML +=`<p>The difference is: ${a-b}</p>`;
}

function product(a,b){
    document.getElementById("results").innerHTML +=`<p>The product is: ${a*b}</p>`;
}

function division(a,b){
    document.getElementById("results").innerHTML +=`<p>The product is: ${a/b}</p>`;
}