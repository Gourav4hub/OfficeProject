const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// get config vars
dotenv.config();

class JWT 
{
    generateAccessToken(userid,empid,type) 
    {
        return jwt.sign({userid,empid,type}, process.env.TOKEN_SECRET, 
            { expiresIn: '75m' });
    }

    authenticateToken(req,callback) 
    {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null)
            callback({status:false,msg:"Token Missing !"})
        else
        {
            jwt.verify(token, process.env.TOKEN_SECRET, (err,tokendata)=>
            {
                //console.log(err)    
                if (err)
                    callback({status:false,msg: "Invalid or Expire Token !"})
                else
                {                    
                    req.userid = tokendata.userid
                    req.empid = tokendata.empid
                    req.type = tokendata.type
                    callback({status:true})
                }
            })
        }
    }
}

module.exports = new JWT()