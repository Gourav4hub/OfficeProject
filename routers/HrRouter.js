const express = require('express')
const {Employee,User} = require('../models/index')
const ApiResponse = require('./ApiResponse')
const { Op } = require('sequelize')
const router = express.Router()

router.use("*",(request,response,next)=>{
    if(request.type=="Admin" || request.type=="HR")
        next()
    else 
        response.json(new ApiResponse(false,null,null,"Unauthorized Request !"))    
})

router.post("/employee/save",async (request,response)=>
{
    // name,phone,email,type,joining_date,password
    try
    {
        var data = request.body;
        data.created_by = request.empid;

        var employee = await Employee.create(data);
        var password = Math.floor(1000 + Math.random() * 9000);

        var user = await User.create({email:request.body.email,password,emp_id:employee.id});
        response.json(new ApiResponse(true,null,"Employee Saved Successfully !",null))
    }catch(err){
        response.json(new ApiResponse(false,null,"Employee Save Failed !",err.message))
    }
})

// TypeWise , StatusWise , "JoingingDate" 
router.get("/employee/list",async (request,response)=>
{
    try
    {      
        var employes = await Employee.findAll({
            attributes : {
                exclude : ["active_status","createdAt","updatedAt","created_by"]
            },
            include : ["createdBy"],
            where : {id: { [Op.ne]: 1}}
        })
        response.json(new ApiResponse(true,employes,"Employee List !",null))
    }catch(err){
        response.json(new ApiResponse(false,null,"Employee List Failed !",err.message))
    }
})

router.patch("/employee/changestatus/:id",async (request,response)=>{
    try
    {      
        var employee = await Employee.findOne({
              where : {id: request.params.id*1}
        })
        if(employee==null)
            response.json(new ApiResponse(false,null,"Employee Not Found !",null))
        else
        {
            await Employee.update({active_status:!employee.active_status},{where:{id: request.params.id*1}}); 
            
            response.json(new ApiResponse(true,null,"Employee Status Changed !",null))
        }
    }catch(err){
        response.json(new ApiResponse(false,null,"Employee Change Status  Failed !",err.message))
    }
})

module.exports = router;