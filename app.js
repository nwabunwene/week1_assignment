let addition = 5 + 6;
console.log(addition);

console.log("Welcome to my website");

let favFood = "white soup";
console.log(`My favorite food is ${favFood}`);

let myName = "Wene";
console.log(myName);

let age = 30;
console.log(age);

console.log(`My name is ${myName} and I am ${age} years old`);

let five = 5;
let six = 6;
let negative = -1;
let bool = six > five;
let bool0 = six < five;

console.log(`Is ${six} > ${five} ?`, bool);
console.log(`${six}<${five}`, bool0);

console.log(bool);

let favProgLang = "python";
let newLearn = "JS, HTML & CSS";

console.log(
  `My favorite programming language is ${favProgLang} but I'm now learning ${newLearn} and finding it fun!`
);

let aboutMe = "I am a moderately pleasant person";

if ((aboutMe.typeof = String)) {
  console.log(`${aboutMe}`);
} else if ((aboutMe.typeof = bool)) {
  console.log("That's not right");
} else {
  console.log("values is not a string");
}

if (aboutMe.length > 10) {
  console.log("The string is greater than 10 characters");
} else {
  console.log("The string is less than ten characters");
}

function sayWelcome(user) {
  console.log("Hello Wene");
}

sayWelcome();

function sayHello(username, age, location) {
  console.log(
    `Welcome to my page, ${username}, who is ${age} years old, from ${location}.`
  );
}

sayHello("wene", 30, "Norwich");

function add(param1, param2) {
  let combo = param1 + param2;
  console.log(`The sum of both parameters is ${combo}`);

  return param1 + param2;
}

add(5, 27);
add(294756, 8484);

function multiply(param1, param2) {
  let combo = param1 * param2;
  console.log(`The multiplication of both parameters is ${combo}`);

  return param1 * param2;
}
multiply(5, 27);
multiply(294756, 8484);

function division(param1, param2) {
  let combo = param1 / param2;
  console.log(`The division of both parameters is ${combo}`);

  return param1 / param2;
}
division(5, 27);
division(294756, 8484);

function subtract(param1, param2) {
  let combo = param1 - param2;
  console.log(`The subtraction of both parameters is ${combo}`);

  return param1 - param2;
}
subtract(5, 27);
subtract(294756, 8484);

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return division(a, b);
  }
}

calculate(5, 3, "*");
