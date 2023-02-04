# Iterations 103
## Declaratively looping over arrays.

### Terms
**declarative programming**
Hides the execution steps taken to achive a result- the WHAT is more important than the HOW

**method**
A function available to a specific data type (e.g string) or a collection (e.g. array)

### Methods
In each of the methods below, we provide a callback function for at least one argument.

**`.forEach`**
Executes logic on each item of an array. The return value is `undefined`
```javascript
const list = ["apples", "bananas", "manzanas"]
list.forEach(function(item, index){
    console.log(`Item ${index + 1} is ${item}`)
})
```
**`.map`**
Returns a new array that manipulates each item of the array on which it is called in some way.
```javascript
const list = ["a", "b", "c"] 
const newList = list.map(function(item, index) {
    return item.toUpperCase();
})
```

**`.filter`**
Returns a new array that is subset of items of the array on which it is called.
```javascript
const list = [1, 2, 3, 4]
const evens = list.filter(function(item, index) {
    return item % 2 === 0
})
```

**`.reduce`**
Returns a single combined value which aggregates the items of the array on which is it called in some way.
```javascript
const list = [1, 2, 3, 4];
const total = list.reduce(function(sum, item) {
    return sum + item;
})
```