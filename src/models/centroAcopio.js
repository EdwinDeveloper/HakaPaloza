const mongoose = require("mongoose");
const {Schema}=mongoose;

const centroAcopio = new Schema({
    nombre:{
        required:true,
        type:String,
        minlength:1,
        maxlength:30
    },
    direccion:{
        required:true,
        type:String,
        minlength:1,
        maxlength:30
    },
    telefono:{
        required:true,
        type:Number,
        minlength:1,
        maxlength:10
    },
    descripcion:{
        required:true,
        type:String,
        minlength:1,
        maxlength:80
    }
});

module.exports={
    model:mongoose.model('CentroAcopio',centroAcopio),
    centroAcopio
}