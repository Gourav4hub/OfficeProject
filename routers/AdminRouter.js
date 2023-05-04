const express = require('express')
const ApiResponse = require('./ApiResponse')
const router = express.Router()

router.use("*",(request,response,next)=>{
    if(request.type=="Admin")
        next()
    else 
        response.json(new ApiResponse(false,null,null,"Unauthorized Request !"))    
})

router.get("/",(request,response)=>{
    response.json({msg:"Admin Router Run !"})
})

module.exports = router;