// Authentication
const express = require('express')
const jwtManager = require('../config/JwtManager')
const {User} = require('../models/index')
const ApiResponse = require('./ApiResponse')

const webRouter = require("./WebRouter")
const adminRouter = require("./AdminRouter")
const hrRouter = require("./HrRouter")
const empRouter = require("./EmployeeRouter")

const router = express.Router()

router.post("/login",async (request,response)=>
{
    const {email,password} = request.body;
    const user = await User.findOne({
        where : {email,password},
        include : "employee",
        attributes: { exclude : ["emp_id"] }
    });
    if(user==null)
        response.json(new ApiResponse(false,null,"Invalid User !",null))
    else
    {
        var userid = user.id;
        var empid = user.employee.id;
        var type = user.employee.type;
        var name = user.employee.name;

        const token = jwtManager.generateAccessToken(userid,empid,type);

        response.json(new ApiResponse(true,{name,token},"Welcome User !",null))
    }
})

// Custom Middleware
router.use("*",(request,response,next)=>
{
    jwtManager.authenticateToken(request,result=>{
        if(result.status)
            next()
        else
            response.json(new ApiResponse(result.status,null,result.msg,null))    
    })
})

router.use("/web",webRouter)
router.use("/admin",adminRouter)
router.use("/hr",hrRouter)
router.use("/emp",empRouter)


module.exports = router
