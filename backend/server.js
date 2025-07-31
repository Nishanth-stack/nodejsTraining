const express=require("express");
const cors =require('cors');
const taskroutes=require('./routes/taskRoutes');
const projectserviceroutes=require('./routes/projectRoutes');


const PORT=5000;

const app=express();
app.use(cors());
app.use(express.json());




app.use('/tasks', taskroutes);
app.use('/projects',projectserviceroutes);


app.listen(PORT,()=>console.log("backend running on port:" +PORT));