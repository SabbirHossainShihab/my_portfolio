//window.alert("I am learning Javascript");
//alert("This is another alert message");
//document.write("further Example");
console.log("Are you crazy?");
var celcius;

var x;
/*x = prompt("Enter celcius number");
fernheit = (9/5)* x + 32
alert ("Fernheit: " + fernheit + " Degree");
console.log("Task Complete");*/

const a = 2;
//a = 3 this can't be assigned
console.log(a);
//Template Literals (ES6)
//Backtik
console.log(`First Line
Second Line`);

var d = 34;
console.log(`His age is ${d}`);

var x = 3;
var y = 4;
console.log(`The summation is ${x + y}`);

//for in use -> get index
//for of use -> get value

//Function Expression and Arrow Function (ES6)

var fuhaj = () => {
    console.log("Arrow Function Module");
}

fuhaj();

var foods = ["Cake", "Icecream", "Potato", "Bread"];

//1st parameter : Item
//2nd parameter : Index
//3rd parameter : Whole Array

foods.forEach(function (value, item) {
    console.log(value, item);
});

function addSomething(item) {
    return `${item} is a food`
}

var arr = foods.map(addSomething);

console.log(arr);

//Static function can be called from class but not from object


//Object destructuring

var  person = {
    firstName: 'Sabbir',
    lastName: 'Shihab',
    dob: '16-08-1995'
}

var {firstName : fname, lastName, dob} = person;

console.log(lastName, fname);

//Spread Operator
var str = 'Bohubrihi';
var newStr = [...str];

console.log(newStr);

var numbers = [23, 56, 7, 8];
console.log(Math.max(...numbers));

var person2 = ['Sabbir', 'Shihab'];

var test = (fname, lname) =>{
    console.log(`Hello ${fname} ${lname}`);
}

test(...person2);


var k = Symbol();

function* getFunction(){
    yield 1;
    yield 'Rahim';

}

var iter = getFunction();

console.log(iter.next());

var mySet = new Set([1,2,2,3]);

console.log(mySet);