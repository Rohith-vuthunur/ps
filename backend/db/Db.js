const mongoose = require('mongoose')
const dotenv = require('dotenv') 
dotenv.config()
// console.log(process.env.mongodburl)
const connect = async()=>{
    try {
        await mongoose.connect(process.env.mongodburl)
        console.log("connected successfully")
    } catch (error) {
        console.log("error occurred",error)
        
    }
    
}
module.exports = connect