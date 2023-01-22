# JavaScript Data 201
## Data type can be collection in other structures like objects and arrays

### Objects

An object describes something. It lives inside of opening and closing curly braces and is organize as key:value pairs, separated by commas. The key and the value are themselves separated by a `:` .
```
const car = {
    color: "green",
    mileage: 67302,
    isNew: false,
}
```

### Arrays

An Array is a list of items. It is defined by opening and closing square brackes. The items in the array are separated by commas. Each item in array is indixed with a number. Array can contain all other data types as well as objects.
```
const shoppingList = ['apples', 'celery', 'bread']
const ages = [7, 7, 8, 8, 7.5]
const cars = [
    {
        color: "green",
        mileage: 67302,
        isNew: false,
    },
    {
        color: "red",
        mileage: 37500,
        isNew: false,
    },
    {
        color: "blue",
        mileage: 80000,
        isNew: false,
    },
]
```

JavaScript considers arrays to be objects. So the shopping list above looks like this to JavaScript.

```
const shoppingList = {
    0: 'apples',
    1: 'celery',
    2: 'bread'
}
```