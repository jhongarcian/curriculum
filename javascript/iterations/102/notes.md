# JavaScript Function 102
## An arrow function expression is more concise than the tradition function expresion. However, there are caveats (not discussed here).

### Adventages (not a complete list)

The `function` keyboard is replaced with `=>`
```javascript
const someFn = function() {
    return 'Hello World'
}

const someFn = () => {
    return 'Hello World'
}
``` 

The curly braces and the `return` keyword can be removed entirely if everything can fit on one line.
```javascript
const someFn = function() {
    return 'Hello World'
}

const someFn = () => 'Hello World'
```

You can remove parenthese if there is only one argument.
```javascript
// One argument
const greeting = function(name) {
    return `Hello ${name}`
}
const greeting = name => `Hello ${name}`

// more than one argument
const sayHello = function(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`
}

const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`
```

A `return` that spans multiple line can either use an explicit `return`, with curly braces, or an implicit `return`, with parentheses.

```javascript

const studentDetails = function() {
    return {
        name: 'Angela',
        age: 16,
        grade: 91
    }
}

// Explicit
const studenDetails = () => {
    return {
        name: 'Angela',
        age: 16,
        grade: 91
    }
}

// Implicit
const studentDetails = () => (
    {
        name: 'Angela',
        age: 16,
        grade: 91
    }
)

```