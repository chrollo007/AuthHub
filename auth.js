import express from "express";

const app=express();
app.use(express.json());

const name="aman";
const pass="123";

app.get("/logout",(req,res)=>{
    res.send("logout");
})
app.post("/login",(req,res)=>{
    const {username,password}=req.body
    if(username===name && password===pass){   
    res.redirect("/api")
    }
    else{
        res.send("wrong credentials")
    }
})

app.get("/api",(req,res)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log("server started at port")
})   