# JavaScript Functions 101
## A general overview

### Terms

**anonymous function**
A function that is not named (see also function expression).
In this function expression, the function part is considered anonymous.
```
const greeting = function(name) {
    return `Hello ${name}`;
}
```

**argument**
A hardcoded value passed into a function when it is executed.
In the example below `'John'` in between the parentheses is the argument.
```
greeting('John')
```

**call**
An action which executes (or fires) the function.

**callback fuction**
Executes within the function to which it is passed as an argument.
```
const cb = function() {
    console.log('I am the callback.');
}

function greeting(name, fn) {
    fn();
    return `Hello ${name}`
}
greeting("Billy", fn)
```

**function**
There are two contexts. One is the function definition itself. Another is the code within the definition which executes when called and which sometimes returns a value.

**function body**
Contains the code of the functions itself within a set of curly braces

**function declaration**
Uses the _function_ keyword to declare a named function. The name of the function inmediately follows the _function_ keyword.
```
function greeting(name) {
    return `Hello ${name}, you sure look nice today.`;
}
```

**function expression**
A function that is the initialization of a variable declaration. The variable which is named, stores the function but the function itself is considered anonymous or unnamed
```
const greeting = function() {
    return 'Hello. you sure look nice today.';
}
```


**hoisting**
Allows a function declaration to be used in code before it is declared.

**IIFE**
An _inmediately invoked function expression_ is a function that is executed directly by the JavaScript engine and not by other code.
```
(function() {
    return 'Hello';
})();
```
IIFEs can also have arguments and parameters.
```
(function(name) {
    return `Hello, ${name}.`;
})('Carlos')
```

**named functions**
See functions declaration.

**parameter**
A placeholder whose value equals the argument passed into the function when it was called. This value is accessed only within the function itself.
In the example `name` inside of the parentheses is the parameter.
```
function greeting(name) {
    return `Hello ${name}, you sure look nice today.`;
}
```

**parentheses**
The parentheses have two purposes. One is to execute a function. Another is part of the syntax to define a function. In he former, it may contain arguments. In the latter, it may contain parameters.

**return**
It implemented, it executes the last line of a function's code. It precedes a data type or a collection to be returned. We say that a function closes or exits when the code that follows _return_ executes which also means that any lines beneath it are ignored

**scope**
Refers to what values are available in memory at a given time during the execution of code.