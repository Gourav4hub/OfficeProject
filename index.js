const express = require('express')
const authRouter = require('./routers/AuthRouter')

const server = express()
server.use(express.json())

server.get("/",(request,response)=>{
    
})

server.use("/auth",authRouter)

server.listen(9898,(request,response)=>{
    console.log("Office Running : http://localhost:9898")
})