//CORE MODULE
const dns = require('node:dns');

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('google.com', options, (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family)
});

// LOCAL
function greeting(name){
    return `hello ${name}`
}
module.exports = greeting;

// on the node shell 
const greeting = require("./index.js")
// Call it once is catched
greeting("John")
// output "Hello John"