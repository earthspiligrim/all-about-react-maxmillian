/*
    External links and sources: 
    Ep2: tutorial on this keyword
        https://www.youtube.com/watch?v=bu7D6Go-Ivc&list=PLSfH3ojgWsQr9bPuWl7kYHYy5kqhzMzNw&index=2&t=0s

            const car = {
                model: 'corolla',
                brand: 'toyota',
                drive: function() {
                    console.log(this);
                }
            }

            car.drive(); // upon calling drive it will print the entier car object since we calling the drive function
                        // referencing to the car object by callind (car.___)
            //unlike when you reference the calling of drive function from anotherobject it would print the default object(windows)

            const boom = car.drive()
            boom()); //this will print the windows object which it the supreme object on the browser since we are not referncing to any object like car int he above example
            
            console.log(this); // this will print the default windows object

            // u can use this to manage a object level data like

            const toad = {
                xPos: 0, yPos: 0,
                moveLeft: function(unit) { this.xPos -= unit;},
                moveUp: function(unit) { this.yPos += unit;},
                moveDown: function(unit) { this.yPos -= unit;},
                moveRight: function(unit) { this.xPos += unit;},
                getPosition() {
                    console.log(this.XPos, this.yPos);
                    function inner() {
                        console.log(this)
                    }
                    inner();// this would print the this as windows object since we are not referncing to any object

                } 
            }

            Takeaways :
                1. The 'this' keyword represents the context in Javascript
                2. By default, 'this' resolves tot he global object, ie 'window' object in the browser
                3. 'this' is useful to access information int he current context, eg updating value of the objectg instance
    
    Ep3: Arrow function vs Normal function in Javascript
          //writing a differnece of normal function and a arrow function  
            function add5(x) {
                return x+5;
            }
            //arrow function below
            const subtract = (x, y) => {
                return x-y;
            }

            //Key major differences between arrow function and the normal function
                // we can omit the return statement and curly braces
                //when the function logic is a one liner

                const multiply = (x, y) => x*y;
                    //taking advantage of this feature we can cut down many lines of code
                
                //when ther eis only 1 argument; bracket is optional

                const add2 = nums => nums +2;

                //the 'this' keyword in arrow function is automatically bound to the parent's context

                let car = {
                    color: 'red',
                    drive: function (){
                        const inner = function() { console.log(this); }
                        inner(); // here the above call this will console the window object which is the default object on the browser
                    },
                    honk: function() {
                        const inner = () => {
                            console.log(this);
                        }
                        inner()' // now this will print the parent object since arrow function will be bounded to the parents context by the default
                    }, //the below is to make the above regular function
                    brake: function(){
                        const inner = function() { console.log(this); }.bind(this);
                        inner();
                        //when you bind the context above the inner will print the car object since we are binding it; withut binding it will console the widnows object by the default
                    },
                    heyy: function(){
                        const inner = function() { console.log(this); }.bind('heyy');
                        inner();
                        //the this here will print heyy since that the object context which we are bindingf
                    }
                }

                car.drive(); car.honk(); car.brake(); car.heyy();

                Takeaways: 
                    1. We dont need 'return' and the curly braces in an arrow function if the function is a one-liner.
                    2. If there is only 1 argement the round brackets are optional
                    3. Arrow function automatically binds the parent's context to itself

                
    Ep4- Closure and Higher Order Functions in JavaScript
        
        //Higher order functions are functions that take in another funcction or return another function

        function main() {
            return function() {

            }
        }


        Pre-requisite and Add on Concept (https://stackoverflow.com/questions/1047454/what-is-lexical-scope)

        
        Lexical scoping: Lexical scoping anedi two types lo untundi 1. static scope and 2. dynamic scope        
        1. static scope:
        First, lexical scope (also called static scope just like in c)
        void fun() {
            int x = 5;
            
            void fun2() {
                printf()
            }
        }

        2. dynaic scope:

            void fun() {

            }
        https://stackoverflow.com/questions/48295265/lexical-scope-in-javascript
            To understand the lexical scope you need to have a basic understanding of the scope. In javascript, we have classified scope in three types
                1. Function scope 2. Block scope  3. Lexical Scope

                Function Scope -> The variables defined inside the function are considered in function scope.the var keyword is used to define the variable in the function scope.

                Block scope -> The variables defined in the area within if,switch condition,for,and while loops. whenever you see '{}' curly braces, its a block. In Es6 const and let keywords allow developers to declare a variable in the block scope. which means those variables exist only within the corresponding block.

                Lexical scope-> In one line I want to say "children scope have access to the variable in parent scope"

                    var outerFunction = function()
                        {
                            if(true){
                                var x = 5;
                                const y = 10;
                            }

                            var innerFunction = function(){
                                if(true){
                                    alert(x);
                                    //alert(y);   //y is not defiend on line 13

                                }
                            }
                            innerFunction();
                        }
                        outerFunction();

                    The scope of a variable is defined by their position in the source code. In order to resolve variable javascript starts at the innermost scope and searches outward until it finds the variable it was looking for. lexical scoping is nice because we can easily figure out what the value of a variable will be by looking at the code; whereas in dynamic scoping the meaning of a variable can change at runtime by making it more difficult

                
        
        
*/

