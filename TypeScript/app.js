"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello, Welcome");
var message = 'Welcome ';
console.log(message);
var x = 10;
var y = 20;
var sum;
//const title; gives error. const variables must be initialized
var title = 'Haii';
var isBeginner = true; // let varname: vartype = value;
var total = 0;
var name = 'Ram';
var sentence = "My name is ".concat(name, " I am a beginner in TypeScirpt");
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Seetha';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
/*if(hasName(myVariable)){
    console.log(myVariable.name);
}*/
//(myVariable as string).toUpperCase();
function add(num1, num2) {
    console.log(num1 + num2);
}
add(5, 10);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Seetha',
    lastName: 'Ram'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Ramm');
console.log(emp1.employeeName);
emp1.greet();
