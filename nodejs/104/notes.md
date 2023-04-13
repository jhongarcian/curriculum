# NodeJS 104
## Modules make it easier to scale and maintain Node applications

### Modules
- compartmentalize code
- act as building blocks in an application
- adhere to an import-export pattern

### Types
- core
- local
- third-party

### Import
```javascript
const cowTalk = require('cowsay')
```

### Export
```javascript
function someFunction() {
    //code goes gere
}
module.exports = someFunction;
```