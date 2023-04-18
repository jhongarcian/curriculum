# Server 103

## express request object properties cache values sent from the client to the server

`req.body`

- An object that contains key/value pairs sent from the client to the server
- The server must implement middleware to parse JSON
- The request type must be POST

`req.cookies`

- Contains the string that defines a cookies stored in the browser
- The server must implement middleware to parse cookies

`req.params`

- An object of key/value pairs created by param routes and their values

`req.query`

- An object of key/value pairs created by query parameter supplied to the URL
