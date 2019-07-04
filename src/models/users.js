const mongoose = require("mongoose");
const {Schema}=mongoose;

const user = new Schema({
    nombre:{
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
    foto:{
        required:true,
        type:String
    },
    facebook:{
        required:true,
        type:String
    },
    direccion:{
        required:true,
        type:String,
        minlength:1,
        maxlength:40
    },
    edad:{
        required:true,
        type:Number
    },
    email:{
        required:true,
        type:String,
        minlength:1,
        maxlength:30
    },
    password:{
        required:true,
        type:String,
        minlength:1,
        maxlength:60
    }
});

module.exports={
    model:mongoose.model('user',user),
    user
}