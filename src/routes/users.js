const express = require("express");
const routeUser = express.Router();

const useCaseUser = require("../useCases/user");

routeUser.get('/',async(req,res)=>{
    try{
        res.json({
            success:true,
            message:"users",
            payload:{

            }
        });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"Could not get the user data",
            error:[
                error
            ]
        });
    }
});

routeUser.post('/new',async(req,res)=>{
    try{
        const user = await useCaseUser.newUser(req.body);

        res.json({
            success:true,
            message:"new user created",
            payload:{
                user
            }
        });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"could not create the new user",
            error:[
                error
            ]
        });
    }
});

routeUser.put('/update',async(req,res)=>{
    try{
        const userUpdated = await useCaseUser.updateUser(req.body);
        res.json({
            success:true,
            message:"user updated",
            payload:{
                userUpdated
            }
        });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"could not update the new",
            error:[
                error
            ]
        });
    }
});

routeUser.delete('/delete',async(req,res)=>{
    try{
        const userDeleted = await useCaseUser.deleteUser(req.body.id);
        res.json({
            success:true,
            message:"user deleted",
            payload:{
                userDeleted
            }
        });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"could not delete the user",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routeUser
}