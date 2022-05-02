// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");


// let firstName = "Smith";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(myFirstJob);


// let myCountry = "Georgia";
// let currentContinent = "Europe";
// let georgianPopularion = "3,000,000";

// console.log(myCountry);
// console.log(currentContinent);
// console.log(georgianPopularion);


// Boolean
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 4);
// console.log(typeof "Tako");


javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// error in javascript
console.log(typeof null);


let age = 30;
age = 31;

// consts cant be changed, consts cant be empty
const birthYear = 1991;

// not recommended to use
var job = "programmer";
job = "teacher";


// Math operators
const now = 2022;
const ageJonas = now - 1990;
const ageSarah = now - 2000;
console.log(ageJonas, ageSarah);

// 2 ** 3 meanse 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);


const firstName = "John";
const lastName = "Smith";
console.log(firstName + " " + lastName);


// Assignment operatos
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

// Comparison oeprators

console.log(ageJonas > ageSarah);  // <  > <= >=
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2000);


const now = 2022;
const ageJonas = now - 1990;
const ageSarah = now - 2000;

console.log(now - 1990 > now - 2000);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);


const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);

const marksweight = 78;
const johnsweight = 92;
const marksheight = 1.69;
const johnsheight = 1.95;

const marksBmi = marksweight / (marksheight * marksheight);
const johnsBmi = johnsweight / (johnsheight * johnsheight);
console.log(marksBmi, johnsBmi);

const markHigherBMI = marksBmi > johnsBmi;
console.log(markHigherBMI);


const firstName = "tako"
const job = "teacher"
const birthYear = 1997;
const year = 2022;

const tako = "I'm " + firstName + ",  " + (year - birthYear) + " years old, " + " and a " + job + "!";
console.log(tako);

const takoNew = `I'm ${firstName}, ${year - birthYear} years old, and a ${job} `;
console.log(takoNew);

console.log(`just a regular string ...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
with
lines`); 

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving lessons ");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
} 

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); 

// Challange #2

const marksweight = 78;
const johnsweight = 92;
const marksheight = 1.69;
const johnsheight = 1.95;

const marksBmi = marksweight / (marksheight * marksheight);
const johnsBmi = johnsweight / (johnsheight * johnsheight);
console.log(marksBmi, johnsBmi);

const markHigherBMI = marksBmi > johnsBmi;
console.log(`Marks BMI i higher than John's`)

let bmi;
if (marksBmi > johnsBmi) {
    console.log(`Marks (${marksBmi}) BMI is higher than John's (${johnsBmi})`);
} else {
    console.log(`John's ${johnsBmi} BMI is higher than Mark's ${marksBmi}`);
} 


// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tako"));
console.log(typeof NaN);

console.log(String(23), 23);


// Type coercion
console.log("I am " + 23 + " years old");

console.log("23" - "10" - 3);

console.log("23" * "2");


let n = "1" + 1; // "11"
n = n - 1;
console.log(n); 

//  5 false values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("tako"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
    console.log("Dont't spend it all ;");
} else {
    console.log("You should get a job!")
}

let height = 10;
if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is UNDEFINED");
} 
const age = 18;
// === is strict
if (age === 18) console.log("You just became and adult :D");

//  == is not so strict
if (age == 18) console.log("You just became and adult");


const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 4) {
    console.log("4 is a cool number");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else {
    console.log("Your number is neither 4 nor 7");
}

// is not equal
if (favourite !== 23) console.log("why not 23?"); 


const hasDriversLicense = true;  // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // and operator
console.log(hasDriversLicense || hasGoodVision); // or operator
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("sarah is able ro drive");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = true; // C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("sarah is able ro drive");
} else {
    console.log("Someone else should drive");
}


// const dolphinScore = 96 + 108 + 89
// const koalasScore = 88 + 100 + 110;

// const averageDolphineScore = dolphinScore / 3;
// const averageKoalasScore = koalasScore / 3;

// if (averageDolphineScore > averageKoalasScore) {
//     console.log("Dolphins average score is greater than Koalas");
// } else if (averageDolphineScore === averageKoalasScore) {
//     console.log("Koalas average score is equal than Dolphines");
// } else {
//     console.log("Koalas average score is greater than Dolphines");
// }

// Bonus 

const dolphinScore = 97 + 112 + 101;
const koalasScore = 109 + 95 + 123;

const averageDolphineScore = dolphinScore / 3;
const averageKoalasScore = koalasScore / 3;

if (averageDolphineScore > averageKoalasScore && averageDolphineScore >= 100) {
    console.log("Dolphins average score is greater than Koalas");
} else if (averageDolphineScore === averageKoalasScore && averageKoalasScore >= 100 && averageDolphineScore >= 100) {
    console.log("Koalas average score is equal than Dolphines");
} else {
    console.log("Koalas average score is greater than Dolphines");
}


// Switch statement

const day = "thursday";

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Pepare");
        break;
    case "wednesday":
    case "thursday":
        console.log("write code examples");
        break;
    case "friday":
        console.log("record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy");
        break;
    default:
        console.log("Not a valid day!");
}



//  ? if is true
const age = 15;
age >= 18 ? console.log("i like to drink wine") :
    console.log("i drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}

console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);


*/

const billValue = 275;
const tip = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : bill * 0.2;
console.log(`The bill value wa ${billValue} , the tip was ${tip} , and the total value ${billValue + tip}`);