const express = require('express')
const dotenv = require('dotenv');

const authRouter = require('./routers/AuthRouter')

dotenv.config();
const server = express()
server.use(express.json())

server.get("/",(request,response)=>{
    response.json({msg:"Office DB Running !"})
})

server.use("/auth",authRouter)

server.listen(process.env.PORT,(request,response)=>{
    console.log("Office Running : http://localhost:"+process.env.PORT)
})