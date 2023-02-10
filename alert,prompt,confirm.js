alert("Enter a number")
let num=(prompt("Enter a value here ",0));
num=Number.parseInt(num);
let write=confirm("Do you want to write to the page");
if(write){
    document.write("Entered value is ",num);
}