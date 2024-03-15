export {}
console.log("Hello, Welcome");
let message = 'Welcome ';
console.log(message);

let x = 10;
const y = 20;

let sum;
//const title; gives error. const variables must be initialized
const title = 'Haii';

let isBeginner: boolean = true; // let varname: vartype = value;
let total: number = 0;
let name: string = 'Ram';
let sentence: string = `My name is ${name} I am a beginner in TypeScirpt`;
console.log(sentence);

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['chris',22];

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Seetha';

let myVariable: any = 10;

function hasName(obj: any): obj is { name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

/*if(hasName(myVariable)){
    console.log(myVariable.name);
}*/

//(myVariable as string).toUpperCase();

function add(num1: number, num2: number){
    console.log(num1 + num2);
}
add(5, 10);

interface person {
    firstName: string;
    lastName: string;
}

function fullName(person: {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Seetha',
    lastName: 'Ram'
};

fullName(p);

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }
    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Ramm');
console.log(emp1.employeeName);
emp1.greet();