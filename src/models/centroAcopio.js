const mongoose = require("mongoose");
const {Schema}=mongoose;

const centroAcopio = new Schema({
    direccion:{
        required:true,
        type:String,
        minlength:1,
        maxlength:60
    },
    descripcion:{
        required:true,
        type:String,
        minlength:1,
        maxlength:70
    },
    tipoBienes:{
        required:true,
        type:String,
        minlength:1,
        maxlength:60
    },
    cordenadas:{
        required:true,
        type:String,
        minlength:1,
        maxlength:130
    }
});

module.exports={
    model:mongoose.model('CentroAcopio',centroAcopio),
    centroAcopio
}