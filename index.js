const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')

const authRouter = require('./routers/AuthRouter')

dotenv.config();
const server = express()
server.use(cors())
server.use(express.json())

server.use(express.static(path.resolve('uploads')))


server.get("/",(request,response)=>{
    response.json({msg:"Office DB Running !"})
})

server.use("/auth",authRouter)

server.listen(process.env.PORT,(request,response)=>{
    console.log("Office Running : http://localhost:"+process.env.PORT)
})