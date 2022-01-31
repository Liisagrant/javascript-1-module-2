// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.

function showMeMessage() {
    console.log("Hello one");
}

showMeMessage(); //this will work

function helloNormalFunction (){
    console.log("normal function")
}

helloNormalFunction();

// IIFE Immediately Invocate Function Exec

(function doSomething() {
    console.log("Hello two");
})();

(function helloNormalFunction() {
    console.log("new function");
})();

// Hoisting: call the function before creating it
// only when you create a function, not when you do function assign to variable

showMeNewMessage();

function showMeNewMessage() {
    console.log("Hello three");
}

// Callback functions - functions as arguments

function logTheArgument(someFunction) {
    console.log(someFunction);
}
logTheArgument(function () {
    console.log("Hello, Lisa");
});

function logSomething(someArgument) {
    console.log(typeof someArgument);
}

logSomething("Lisa"); // string
logSomething(764758); // number

const obj = {};

logSomething(obj); // object

const someArray = [];

logSomething(someArray); // object, because JS sees both object and array as objects


function justSomeFunction() {
    console.log("Hello, I'm a happy function!");
}

logSomething(justSomeFunction); // Function

showMeMeThis();

function showMeMeThis() {
    console.log("Hello Hello");
}

//thisSomething();

const thisSomething = function () {
    console.log("hello I am anonymus function")
}