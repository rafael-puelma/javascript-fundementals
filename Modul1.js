// Modul 1 inlämning

//Variables, types and assignment
//uppgift1

//använder "let""var""const"

let name = " Rafael";
const number = 20;
var ten = 10;

// uppgift 2
// Boolean array string objekt number

let isSunny = true;
let carName = "Volvo XC58";
let array = [1, 2, 3];
let dog = { namn: "Pocket" };
let x = 3;

// Functions uppgift 3

let fifty = 50;
let five = 5;
let summa = calculateSum(fifty, five);

function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log("summan blir = " + summa);

// uppgift 4
let date = new Date();
console.log(date);

// uppgift 5 Objects

let person = {
  fornamn: "Don",
  efternamn: "juan",
  age: 36,
  print: function () {
    console.log(this.fornamn, this.efternamn, this.age);
  },
};
person.print();

// uppgift 6 Objects

const list = [4, 8, 15, 16, 23, 42];

// last on the list
const lastArray = list[list.length - 1];
console.log(lastArray);

// endast värden lägre än 20.

let under20 = [];
for (let i = 0; i < list.length; i++) {
  if (list[i] <= 20) {
    under20.push(list[i]);
  }
}
console.log(under20);

// dubblera siffror

const dubblaSiffror = list.map(dubblaNummer);
function dubblaNummer(num) {
  return num * 2;
}
console.log(dubblaSiffror);

// använd 'forEach'

list.forEach(output);
function output(item) {
  console.log(item);
}

// uppgift 7
let i = 0;
while (i <= 6) {
  if (i < 3) {
    console.log("loop " + (i + 1));
  } else {
    console.log("Almost there ...");
  }
  i++;
}
console.log("done");
