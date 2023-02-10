console.log("JS variables");


let a=10;
console.log(a);
a=20;
console.log(a);

const b=10;


var c=20;
{
    let c=10
    console.log("Value of variable inside block is",c);
}
console.log("value of c that has function scope is ",c);
