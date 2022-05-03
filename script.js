// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('jonas');
// console.log(23)

// let PI = 3.1415; 
// let person = "jmoney";
// let first ='jonas'
// let firstName = 'Matilda';
// let first_name_person = 'Moe'
// let jonas_matilda = 'JM'
// let myFirstJon = "gelato-scoop";
// let myCurrentJob = "student";



// console.log(firstName)
// console.log(js)
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)
// console.log(first_name_person)
// console.log(jonas_matilda)
// console.log(person)
// console.log(myFirstJon)
// console.log(myCurrentJob)

// let country = "USA";
// let continent = 'North America';
// let population = "3,000,000";

// console.log(continent)
// console.log(country)
// console.log(population)

// let colt = "person";
// let anna = "friend";

// console.log(colt)
// console.log(anna)

// let isISLand = "USA";


// // value - object or primitive if not an object

// // 7 primitive Data Types
// // 1. Number. FLoating point number used for decimals and integers.

// // let age = 23; equates to let age = 23.0 


// // 2. string sequence of characters used for text let firstName = 'Jonas';

// //3. Boolean: Logical type that can only be true or false; let fullAge = true; or let fullAge = false;

// // 4. Undefined: Value taken by a variable that sis not yet defined ('empty value') 
//  // let children; <----

// // 5. Null also means empty value.

// // 7. Bigint larger integers than the Number type can hold.


// true;
// console.log(true)
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof continent);
// console.log(typeof PI);

// javascriptIsFun = 'YES!';

// console.log (typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991; 
// console.log(typeof year);
// console.log(typeof null); //javascript error




// isIsLand = true;

// let language;

// console.log(typeof isISLand)
// console.log(typeof population)
// console.log(typeof country)
// console.log(typeof language)

// let age = 30;
// age = 31;
// console.log(age)

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 1996;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
// const firstName = 'jonas'
// const lastName = 'thatcher'
// const space = " "
// console.log(firstName + space + lastName)

// console.log(typeof now)
// let x = 10 + 5; // 15
// console.log(x);
// console.log(x)


// // Assignment operators
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// x--;
// console.log(x)

// Comparison operators
// >, <, >=, <=
// console.log(ageJonas <= ageSarah)
// console.log(ageSarah <= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 <= now - 2019);




// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now -2018;

// console.log(now - 1991 > now - 2018)


// // Math operators are executed before comparison operators.
// console.log(25 - 10 - 5 ); 
// // = 10

// let x, y;

// x = y = 25 - 10 - 5; // x = y = 10 
// console.log(x,y); //  < --------------
// // 10 10 will start on the right side of the procedings.


// const averageAge = (ageJonas + ageSarah) / 2 // division / will happen before the addition 
// console.log(ageJonas, ageSarah, averageAge);

// const marksMass = 78;
// const marksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;
// const marksMass = 95;
// const marksHeight = 1.88;
// const johnsMass = 85;
// const johnsHeight = 1.76;


// const BMIMark = marksMass / marksHeight ** 2;
// const BMIJohn = johnsMass / (johnsHeight * johnsHeight);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI)

// function CalcBmi {
//   marksMass / marksHeight ** 2 = johnsMass / (johnsHeight * marksHeight)
// }

// function calculate() {
//   if (BMIMark <= BMIJohn) {
//     return false;

//   }
//   console.log(calculate)
// }

// const firstName = 'Jonas';
// const job ='teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' +  (year - birthYear) + ' year old ' + job + "!";
// console.log(jonas);
// // template strings! important.

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew)


// console.log(`just a regular old string`)

// console.log('string with \n\
// multiple \n\ '
// )

// const age = 15;
// const isOldEnough = age >= 18;

// if(age >= 18){
//   console.log('Sarah can start driving lessons 😘')
// } else {
// const yearsLeft = 18 - age;
// console.log(`sarah is too young. wait ${yearsLeft} years :)`)
// }


// const birthYear = 2012;
// let century;

// if(birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century)


// const marksMass = 78;
// const marksHeight = 1.69;
// const johnsMass = 92;
// const johnsHeight = 1.95;
// const marksMass = 95;
// const marksHeight = 1.88;
// const johnsMass = 85;
// const johnsHeight = 1.76;


// const BMIMark = marksMass / marksHeight ** 2;
// const BMIJohn = johnsMass / (johnsHeight * johnsHeight);

// const markHigherBMI = BMIMark > BMIJohn;

// if(BMIMark < BMIJohn){
//   console.log(`marks BMI is ${BMIMark} which n is higher than johns`)
// } else {
//   console.log(`Johns Bmi is ${BMIJohn} which is higher than marks`)
// }


// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas') + 18);
// console.log(typeof NaN)

// console.log(String(23), 23);


// // type coercion
// console.log("I am " + 23 + ' years old') // to strings with + 
// console.log('23' - '10' - 3); // to numbers with -


// let n = '1' + 1; 
// if any number is added to a string then it will turn into a string
// console.log(n) // this is turned into 11

// n = n - 1; 
// the minus again will turn it into a number though, this here is turned into 10 now because technically its 11 - 1
// console.log(n)

// let y = 2 + 3;
// console.log(y)
// let x = y + 4;
// console.log(x)
// let c = x + '5';
// console.log(c)


// let x = '10' - '4';
// console.log(x)
// let y = x - '3';
// console.log(y)
// let c = y - 2;
// console.log(c)
// let n = c + '5';
// console.log(n)


// let x = 8 + 7;
// console.log(x)
// let y = x + '9' + 7;
// console.log(y)
// let n = y - 5 + '20' // 7 - 5 = 2;
// // 2 + "20" = 220

// console.log(n)

// truthy falsy value

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Colt'));
// console.log(Boolean({}));
// console.log(Boolean(''));


// const money = 90;
// if(money) {
//   console.log("Spend it all");
// } else {
//   console.log('it me');
// }

// let height = 0;
// if(height) {
//   console.log('height is defined');
// }else {
//   console.log('height is not defined')
// }


// const age = 18;
// if(age === 18) console.log('YOU AN ADULT')

// === true equality  <---'18'===18; false
// == conversion equality <--- '18'==18; true

// avoid loose equality ==

const favorite = Number(prompt("WHats your favorite number"))
console.log(typeof favorite)
console.log(Number(favorite))
console.log(String(favorite))
5
if (favorite === 23 ) {
  console.log('23 is an amazing number')
} else if(favorite === 7) {
  console.log('7 is the number')
} else if(favorite === 9) {
  console.log('9 is the number')
} else if(favorite === 5) {
  console.log('5 is the number')
}else{
  console.log("number is not 23 or 7")
}

if(favorite !== 23){
  console.log("why not 23")
}




