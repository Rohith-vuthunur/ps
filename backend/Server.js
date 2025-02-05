// const EventEmitter = require('events');
// EventEmitter.defaultMaxListeners = 20; // Set a higher limit
// process.setMaxListeners(20);

const express = require('express')
const app = express()
const db = require("./db/Db.js")
db()
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("listening")
})
app.use("/api/user",require('./routes/Userroutes.js'))
app.use("/api/event",require("./routes/Sponsersroutes.js"))
app.listen(process.env.port,()=>{
    console.log("app listening at port :",process.env.port)
})