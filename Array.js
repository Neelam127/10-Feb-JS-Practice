//create array
let arr = new Array();
let arr1 = [];

//Array Methods
arr=[10,20,30,20];

//Array length
console.log(arr.length);

//indexOf():- This method Search the array for an element and returns its position
console.log(arr.indexOf(20));

// sort(): This method is used to sort the elements of an array
console.log(arr.sort());

//reverse(): This method is used to reverses the element of an array. The first array element becomes the last and the last becomes the first.
console.log(arr.reverse());

//concat(): This method will returns a new array comprised of this array joined with an other array or value
console.log(arr.concat(80));

// push(): This method is used to add an item to the end of an Array
console.log(arr.push(100));

//pop():- This method is used to remove an item from the end of an Array
console.log(arr.pop());

// shift():- This method is used to remove an item from the beginning of an Array
console.log(arr.shift());

//unshift():- This method is used to add an item to the beginning of an Array
console.log(arr.unshift(3));

console.log(arr);

//Object
var person={name:"Neelam", BloodGroup:"A+"};
console.log(person.name);
console.log(person["name"]);