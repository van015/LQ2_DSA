let createMatrix confirm("Do you want to create a matrix?");

if (createMatrix) {

let limit1= parseInt(prompt("Enter limit 1:"));

let limit2 = parseInt(prompt("Enter limit 2:"));

let limit3 = parseInt(prompt("Enter limit

3:"));

let str1 prompt("Enter string 1:");

let str2 prompt("Enter string 2:");

let str3 prompt("Enter string 3:");

let output = "";

for (let i = 0; i < limit1; i++) {

for (let j = 0; j < limit2; j++) {

for (let k = 0; k < limit3; k++) {

output += str1 + str2 + str3 + "";

}

output += "\n";

}

output += "\n";

}

console.log(output);

} else {

console.log("Thank you.");

}