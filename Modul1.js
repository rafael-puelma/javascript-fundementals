// Modul 1 inlämning

//Variables, types and assignment
//uppgift1

//använder "let"

let fNamn = " Rafael";
let eNamn = " Puelma";
let older = "36";

function hej() {
  alert("Hej " + fNamn + eNamn + " ålder " + older);
}

hej();

// använder "var"

var a = 10;
var b = 5;
var c = 15;
var sum = varSum(a, b, c);

function varSum(a, b, c) {
  return a + b + c;
}

alert(sum);

// använder "const"

const d = 20;
const e = 25;
const f = 30;

const sum3 = totall(d, e, f);
function totall(d, e, f) {
  return d + e + f;
}

alert(sum3);

// uppgift 2

// Boolean och numbers

let age = 21;

if (age >= 18 && age <= 30) {
  console.log("Yes you can gamle ");
} else {
  console.log("Du måste gå");
}

//array

let vals = [1, 2, 3, 4, 5];
console.log(vals);

// string

let carName1 = "Volvo XC58"; // tagen från hemsidan, efter som jag inte var säker vad jag skulle göra med den
let carName2 = "Volvo XC59"; // men jag har deklarerat 5 string med LET
let carName1 = "Volvo XC61";
let carName2 = "Volvo XC62";
let carName1 = "Volvo XC63";

// objects

let person = {
  namn: "Don",
  older: 36,
  matgillar: "fisk",
  matogilar: "svamp",
  ogonfarg: "brun",
};

console.log(
  "jag heter " +
    person.namn +
    "jag gillar " +
    person.matgillar +
    "men jag gillar inte " +
    person.matogilar
);

// Functions uppgift 3

var num1 = 10;
var num2 = 5;
var sum = varSum(num1, num2);

function varSum(num1, num2) {
  return num1 + num2;
}

console.log(sum);

// uppgift 4
var d = new Date();
console.log(d);

// uppgift 5 Objects

let person2 = {
  fNamn1: "Don",
  eNamn2: "juan",
  older2: 36,
};

console.log(
  "jag heter " +
    person2.fNamn1 +
    person2.eNamn2 +
    "och jag är  " +
    person2.older2 +
    " år gamal"
);

// uppgift 6 Objects

var List = [4, 8, 15, 16, 23, 42]; // alla steg i uppgift 6 kommer att anväda samma List

// last on the list
var lastArray = List[List.length - 1];
console.log(lastArray);

// endast värden lägre än 20.

let under20 = [];
for (let i = 0; i < List.length; i++) {
  if (List[i] <= 20) {
    under20.push(List[i]);
  }
}
console.log(under20);

// dubblera siffror

var dubblaSiffror = List.map(dubblaNu);
function dubblaNu(num) {
  return num * 2;
}
console.log(dubblaSiffror);

// använd 'forEach'

List.forEach(output);
function output(item, index, array) {
  console.log(index, item);
}

// uppgift 7 Loops  funkar inte !!!!!!!!
var i = 0;
while (i <= 6) {
  if (i < 3) {
    console.log("loop " + (i + 1));
  } else {
    sonsole.log("Almost there ...");
  }
  i++;
}
console.log("done");
