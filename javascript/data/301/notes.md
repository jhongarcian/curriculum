# JavaScript Data 301
## Understanding inmutability comes down to understanding how data is stored in memory.

**Definition of Inmutability**
Primative data types are inmutable. (2) Inmutability means that whenever is declared, it lives at an unique address in memory and if it is later re-initialized (e.g. re-assigned), it will live at a new, unique address. (3) if a variable is initialize by reference, instead of by value, its unique address points to the referred address.

**List of primitive data types**

- Strings
- Booleans
- Numbers
- Null
- Undefined

**Example**

```
let age = 32 // initializes by value, it gets a unique address (e.g. Hx78)
let maryAge = age // initializes by reference, it gets a unique address (e.g. Rw33) but this doesn't hold a value, it simply points to (Hx78)
age = 33 // with reinitialization the new value is stored at a new address (e.g. Xa15)
```

**Definition of Mutability**
Collections of primitive data type are mutable, which means that when they are modified or updated, the data is not stored at a new address but remains at the original address when the variable was first declared.

**List of Collections**
* Arrays
* Objects 