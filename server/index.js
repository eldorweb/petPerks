const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors  = require("cors")
const bodyParser = require("body-parser")
const router = require("./Routes/router")
const authrouter = require("./Routes/auth.router")

dotenv.config()


const app = express()


app.use(cors())
app.use(bodyParser.json())


app.use('/zoo', router)
app.use('/auth', authrouter)


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT, ()=> console.log("Server running on", process.env.PORT)
)
})