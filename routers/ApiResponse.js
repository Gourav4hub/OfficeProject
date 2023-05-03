class ApiResponse
{
    constructor(status,data,message,error)
    {
        this.status = status
        this.data = data
        this.message = message
        this.error = error
    }
}

module.exports = ApiResponse