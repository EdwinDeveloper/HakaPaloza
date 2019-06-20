const express = require("express");
const routeCentro = express.Router();

routeCentro.get('/',async(req,res)=>{
    try{
        res.json({
            success:true,
            message:"Centro de acopio",
            payload:{
                
            }
        });
    }catch(error){
        res.status(404);
        res.json({
            success:false,
            message:"Centro de acopio",
            error:[
                error
            ]
        });
    }
});

module.exports = {
    routeCentro
}