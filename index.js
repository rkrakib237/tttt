const express = require("express");
const app =  express();
const cors =require("cors");
app.use(cors());
const port = process.env.port||5000;

const courseCollection = require("./data/projectData");
const blogCollection =require("./data/blog.json")

app.get("/blog",(req,res)=>{
    res.send(blogCollection)
})

app.get("/blog/:id",(req,res)=>{
    const id =req.params.id
    const singleBlog=blogCollection?.find((p)=>p.id==id);
    if(!singleBlog){
        res.send("data not Found")
    }
    res.send(singleBlog)
})


app.get("/",(req,res)=>{
    res.send("server is running now")
})
app.get("/allCourse",(req,res)=>{
    res.send(courseCollection)
})
app.get("/course/:id",(req,res)=>{
    const id =req.params.id;
    const signleCourse = courseCollection?.find((p)=> p.id ==id);
    if(!signleCourse){
        res.send("no ")

    }
    res.send(signleCourse)
   
})

app.listen(port, ()=>{
    console.log("server is running ",port)
})
module.exports=app;