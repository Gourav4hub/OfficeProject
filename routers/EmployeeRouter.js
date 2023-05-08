const express = require('express')
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const {Employee} = require('../models/index')
const fileUpload = require('express-fileupload')
const ApiResponse = require('./ApiResponse')
const router = express.Router()
router.use(fileUpload())
router.use(express.urlencoded())

router.use("*",(request,response,next)=>
{    
    if(request.type=="Employee")
        next()
    else 
        response.json(new ApiResponse(false,null,null,"Unauthorized Request !"))    
})

router.post("/uploadpic",async (request,response)=>
{
    try{
        var requestImage = request.files.image
        //console.log(requestImage)
        var fileName = uuidv4() + path.extname(requestImage.name)
        var filePath = path.resolve("uploads",fileName);
        //console.log(filePath)
        requestImage.mv(filePath);

        // Delete Old Uploaded File !!!!

        var url = "http://localhost:9898/"+fileName;
        await Employee.update({image:url},{where:{id:request.empid}});
        response.json(new ApiResponse(true,null,"Image Upload Success !",null))
    }catch(err){
        response.json(new ApiResponse(false,null,"Image Upload Failed !",err.message))
    }
})

module.exports = router;