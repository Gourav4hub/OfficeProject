# OfficeProject
Express Batch 11AM Project

Modules
***********************************
npm install --save express path mysql2 sequelize mongoose cors dotenv express-fileupload uuid jsonwebtoken nodemailer


#################################################

Database Design
************************************
Project : OfficeProject

	1. Employee
					name , phone , email , type (admin,hr,employee),
					joiningDate , image , activeStatus , createdBy
	2. User
				    email , password , employeeId , status
				
	3. LeaveRequest
					description , days , startDate , reqDate , employeeId
					type (Medical , Normal , ...) , status (pending , approve , reject , cancel) 
	4. LeaveRecord
				 requestId , days , startDate , approveDate , approveBy
				 			 
	5. ChatRecord
					datetime , sender , receiver , message			  			
	
	
