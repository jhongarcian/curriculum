const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const corsOptions = {
    origin: "*",
    credentials: true
}

const server = express()

server.use(express().json())
server.use(cookieParser())
server.use(cors(corsOptions))

server.get("/", (res, req) => {
    res.json({message: "You are at the root"})
})

server.post("/body", (res, req) => {
    console.log("body", req.body)
    res.json({message: "You are at /body"})
})

server.get("/cookies", (res, req) => {
    console.log("cookies", req.cookies)
    res.json({message: "You are at /cookies"})
})

server.get("/params/:someRoute", (res, req) => {
    console.log("params", req.params)
    res.json({message: "You are at /params"})
})

server.get("/query", (res, req) => {
    console.log("query", req.query)
    res.json({message: "You are at /query"})
})

server.listen(8080, ()=> {
    console.log("The server is running at PORT 8080")
})