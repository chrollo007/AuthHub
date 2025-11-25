
import object  from "../models/object.js";

async function hello(req,res){
        res.json("hello")
    }
async function register(req,res){
   const {name,email,password}=req.body;
   if(object.find(obj=>obj.email===email)){
    res.json("email already exist");
   }
    object.push({name,email,password});
   res.json("registered successfully")
    
}
async function get(req,res){
   res.json(object)
}
async function login(req,res){
    const {email,password}=req.body;
    const exist=object.find(obj=>obj.email===email)
    if(!exist){
            res.json("no user found")
    }else if(object.password===password){
        res.json("login successfully");
    }
    
}
export default {
    hello,
    register,
    login,
    get
};