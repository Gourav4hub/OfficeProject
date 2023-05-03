const express = require('express')
const ApiResponse = require('./ApiResponse')
const constants = require('../utils/SystemConstant')
const router = express.Router()

router.get("/usertypes",(request,response)=>
{
    response.json(new ApiResponse(true,constants.emp_type))
})
router.get("/leavetypes",(request,response)=>{
    response.json(new ApiResponse(true,constants.leave_type))
})
router.get("/leavestatus",(request,response)=>{
    response.json(new ApiResponse(true,constants.leave_status))
})
module.exports = router