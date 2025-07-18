const express = require("express");
const app = express();
const studentRoutes = require('./routes/student.routes')
const connectDB = require("./config/database")

connectDB()
const PORT = process.env.PORT;


app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use("/api/students", studentRoutes)


app.listen(PORT,()=>{
console.log(`Server is run ${PORT}`);
});