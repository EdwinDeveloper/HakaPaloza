const express = require("express");
const routeCentro = express.Router();
const useCaseCentro = require("../useCases/centroAcopio/index");

routeCentro.post('/new',async(req,res)=>{
    try{
        const newCentro = await useCaseCentro.newCentroAcopio(req.body);
        res.json({
            success:true,
            message:"Centro de acopio",
            payload:{
                newCentro
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