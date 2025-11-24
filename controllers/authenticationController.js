import object  from "../models/object.js";

async function hello(req,res){
        res.json("hello")
    }
async function register(req,res){
   const {name,email,password}=req.body;
   object.name=name;
   object.email=email;
   object.password=password;
   res.json("registered successfully")
    
}
async function get(req,res){
    const arr=[object.name,object.email,object.password];
    res.json(arr);
}
async function login(req,res){
    const {email,password}=req.body;
    if(object.email==email && object.password==password){
            res.json("login successfully")
    }else{
        res.json("invalid");
    }
    
}
export default {
    hello,
    register,
    login,
    get
};