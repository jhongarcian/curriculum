const express = require("express")

const server = express()

server.get("/", (req, res) => {
    res.json({ message: "hello world" })
    // res.send(" Hello Universe.")
})

server.listen(8000, ()=> {
    console.log("The server is running at PORT 8080")
})
