//charAt(c)
let string="Neelam";
console.log(string.charAt(5));

//concat(p1, p2)
let concatStr=string.concat(" Kurhade");
console.log(concatStr);

//indexOf(substr, [start_from])
let subStr=string.indexOf("lam");
console.log(subStr);

//lastIndexOf(substr, [start_from])
let lastIndexOfStr=string.lastIndexOf("e");
console.log(lastIndexOfStr);

//slice(start, [end])
let slicedStr=string.slice(2,6);
console.log(slicedStr);

//split(delimiter, limit)
let splitStr=string.split("e");
console.log(splitStr)

//toLowerCase
let toLowerCaseStr=string.toLocaleLowerCase();
console.log(toLowerCaseStr);

//toUppercase
let toUpperCaseStr=string.toUpperCase();
console.log(toLowerCaseStr);

//search(“str”)
let searchStr=string.search("am");
console.log(searchStr);

//substr() Method
let subStringStr=string.substring(2,2);
console.log(string.substring(2,2));

//template Literals
let str1="Neelam";
let str2="Kurhade";
let text=`My full name is ${str1} ${str2}`;
console.log(text);