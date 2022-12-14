



/*




    var creates variables in js 
        from es6 two more ways of declaring variables are introducted they are let and const, var still works but highly use let and const
        let -> new var if you wanna declare variables
        const-> if the value is const
    
    
Video 13: Arrow functions

    Regular function
        function myfnc(){......}

    Arrow Function
        const myFnc = () => {....}

        Reference acadea.io.jsplaylist.js

            

Video 14 Exports and Imports
        In javascrip we often imports functions and variables from multiple js files for example below

            person.js
                const person = {
                    name: 'Max'
                }

                export default person
            
            utility.js
                export const clean = () => {......}
                export const baseData = 10;
            
            //now we might have to import the above two filesin a third file
            app.js

                //below are default export
                import person from './person.js'
                import prs from './person.js' // here since person is the default and the only export in person.js we got the luxury to name it as prs 

                //named export
                import { baseData } from './utility.js'
                import { clea } from './utility.js'
                import { smth as Smth } from './utility.js'
                //multiple named exports
                import * as bundled from './utility.js'

Video 15 Understanding Classes
    A class can have both properties and functions and is defined by class keyword
            class Person {
                name = 'Max' //property
                call = () => {....}  // method
            }

            //usage
                const myPerson = new Person();
                    myPerson.call()
                    console.log(myPerson.name)

            // Inheritance
                class Person extends Master
          
            class Human {
                constructor() {
                    this.gender = 'male';
                }
                printGender() {
                    console.log(this.gender);
                }
            }
            class Person extends Human {
                constructor() {
                    super(); // must iplement to use the parent constructor and intialize the parent class
                    this.name = 'Max';
                    this.gender = ''female'; // to override value from the parent class
                }
                printMyName() {
                    console.log(this.name);
                }
            }

            const person = new Person();
            person.printMyName();
            person.printGender();

Video 16 Classes, Properties and Methods
    * Properties are like "variables attached to classes / objects"
                    ES6
            constructor() {
                this.myProperty = 'value';
            }
                    ES7
            // we now have a better way to define a property inside a class in modern js without the use of the constructor
            myProperty = 'value'

    * Methods are like "functions attached to classes/objects"
                ES6
        myMethod(){.....}
        
                ES7
        myMethod = () => {} // arrow functions avoids the complication with the this keyword

    
        class Human {
                this.gender = 'male';
                printGender = () =>{
                    console.log(this.gender);
                }
            }
            //NOTE: we dont need the super call anymore
            class Person extends Human {
                    name = 'Max';
                    gender = ''female'; // to override value from the parent class
                printMyName = () => {
                    console.log(this.name);
                }
            }

            const person = new Person();
            person.printMyName();
            person.printGender();

Video 17 The Spread & Rest Operator
        Spread  - spread operator is used to split up array elements OR object properties
                Eg:     const newArray = [...oldArray, 1, 2]
                        const newObject = {...oldObject, newProp: 5 }
                                //here in the above example if the oldObject has a property newProp then it will be overridden
                        
                        Example:
                            const numbers = [1, 2, 3];
                            const newnumbers = [numbers, 4];
                            console.log(newnumbers); // would print [[1,2,3], 4]
                            const newnumbers2 = [...numbers, 4];
                            console.log(newnumbers2); // would print [1, 2, 3, 4]
        
                            Action Example on objects:
                                const person = {
                                    name: 'Max'
                                }
        
                                const newPerson = {
                                    ...person,
                                    age: 28
                                }
                                console.log(newPerson);
        
        Rest - Rest operator is used to merge a list of function arguments into an array
                Eg:    function sortArgs(...args) {
                            return args.sort();
                        }
                    
                        Action Example:
                            const filter = (...args) => {
                                return args.filter(el => el === 1);
                            }

                            console.log(filter(1, 2, 3));


Video 18 Destructuring: Easily extract array elements or object properties and store them in variables

        Array Destructuring
                Eg: [a, b] = ['hello', 'max'];
                    console.log(a); // prints hello
                    console.log(b); // prints max
                    
                    Action Example:
                        const numbers = [1, 2, 3]
                        [num1, , num3] = numbers
                        console.log(num1, num3); // prints 1 and 3

        Object Destructuring
                Eg: {name} = {name: 'Max', age: 28}
                    console.log(name); // prints Max
                    console.log(age); // prints undefined
                
Video 19: Reference and Primitive Types Refresher

// variables are copy by value
const number = 1;
const num2 = number; // will just copy the value into num2
let number = 1;
let num2 = number;
console.log(num2); // prints 1
number = 2
console.log(num2); // prints 1

//For objects and arrays the reference are copied down

let person = {
  name : 'Max',
  age: 28
}

let max = person;

console.log(max);
person.name = 'Max Millian';
console.log(max); // updates the name to 'Max Millian';

If you want to copy just the value use the spread operator

const max = {...person} // this will copy just the value but not the reference
// hence even the value gets changed on the person object it would not reflect on the max object
            

Video 20: Refreshing Array Functions

const numbers = [1, 2, 3];

const doubleTheNumbers = numbers.map(num => {
    return num*2;
})

Video 21: Wrap Up

Video 22: Next-Gen Javascript-Summary


Video 23: JS Array Functions
JS Array Functions
Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - 
feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

*/
