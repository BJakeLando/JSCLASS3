function greet(name){
    return "Hello" + name + "!";
}

let greeting1 = greet("Eric");
let greeting2 = greet("Alvin");

console.log(greeting1);
console.log(greeting2);

function sum(a,b){
    console.log(a+b)

    return a+b;
}

let result = sum(5,4);
console.log(result);

sum(6,3);

function multiplyThree(a){
    console.log(a*3);

    return a*3;

}

let result2 = multiplyThree(4);

//instructure solution 
//return a*3
//}
//console.log(multiplyThree(5))

let subtotal = 0;

function addCart(price){
    return subtotal += price;
                   //0+100
}

subtotal = addCart(100);
subtotal = addCart(400);
subtotal = addCart(600);
console.log(subtotal);

function calculateTaxes(subtotal){
    return 1.11*subtotal;
}

console.log(subtotal);

let total = calculateTaxes(subtotal);
console.log(`The total is: $ ${total}`);