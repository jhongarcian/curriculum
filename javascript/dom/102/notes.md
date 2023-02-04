# DOM 102
## Modifying the DOM comes down to learning a few methods and properties.

### Creacting Elements
```javascript
const div = document.createElement('div');
div.innerText = 'Hello World';
div.innerHTML = `<h1>Hello World</h1>`
root.append(div);

```
### Selecting Elements
```javascript
// returns a list of nodes
document.getElementsByTagName('p');
document.getElementsByClassName('items');
document.querySlectorAll('.items');

// returns a single node
document.getElementById('root');
document.querySlector('article #item');

```
### Modifying Elements
```javascript
const root = document.getElementById('root');
root.setAttribute('data-id', 'someId');
root.style.color = 'crimson';
root.innerText = 'Some new text here';
root.removeAttribute('data-id')

```


