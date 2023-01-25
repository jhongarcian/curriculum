# HTML 101

## HTML forms the structure of all web pages

HTML -> hyper text markup language

The `<head>` tag configures the page and is not rendered by the browser.
The `<title>` contains the name of the page and is rendered in the browser's tab.
Tags that have opening and closing elements are known as container elements.
Tags that do not have opening and closing elements are not containers elements and are called self-closing tags (` />`).
To make reading an HTML file easier, lines are nested within their parent element.
Browsers read HTML and in a sense, HTML is like a big, long string.
Browsers can read files or you can start a server in VSC with  **Go live**.


### Some of the most common elements are
#### semantic elements include
```
<ul> - unordered list
<ol> - ordered list
<li> - list item, must be contain by a `<ul>` or an `<ol>`
<header> - the header area of a page
<main> - the main area of a page
<body> - contains all other rendering HTML elements
<footer> - the footer area of a page
<nav>- contains navigation elements, usually found inside of `<header>`
<p> - used for a single paragraphs of text
<img /> - use for images (note that this is self-closing), must have a `src ` attribute
<a> - anchor tag, used to hyperlink elements with `href` attribute
<h1> - header text (largest)
<h2> - header text 
<h3> - header text 
<h4> - header text 
<h5> - header text 
<h6> - header text (smalles)
```

#### generic elements include
```
<section> - defines a section for child elements
<div> - generic containing element 
```

#### tags used inside of `<head>`
```
<link> - used to link a stylesheet, only found in the `<head>`
```