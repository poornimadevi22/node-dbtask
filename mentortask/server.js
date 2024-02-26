const express=require("express");
const app=express();
const mongoose=require("mongoose");
const parser=require("body-parser");
const mentorRoute = require("./routes/mentor");
const studentRoute = require("./routes/studentRoute");

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const port=5000;
const student=require("./models/student")
const mentor=require("./models/mentor") 

// app.use("/students",studRoute)

app.use(parser.json());
console.log(process.env.MONGODB)
mongoose
// .connect(`${process.env.MONGODB}/schoolDB`,
.connect(`${process.env.MONGODB}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {console.log("Connected to mongoDB...",process.env.MONGODB)
    
}).catch((err) => {
    console.error("not connected to db..",err)
}); 

app.use("/mentor", mentorRoute);
app.use("/student", studentRoute);
app.use(express.static("Public"));





app.listen(port, () => console.log("Listening on port ",port,"..."));

