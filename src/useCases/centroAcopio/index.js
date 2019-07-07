const centroAcopioModel = require("../../models/centroAcopio").model;
const userCases = require("../user/index");

const verifyUserNotCentro = async (id_usuario)=>{
    console.log("ANTES DE : ",id_usuario);
    
    
    console.log("RESPUESTA : ",centro);
    
    return centro;
}

const newCentroAcopio = async(centro)=>{

    const userExist = await userCases.verifyIdUsuario(centro.id_usuario);
    const ce = await centroAcopioModel.findOne({id_usuario:centro.id_usuario}).exec();

    if(!userExist){
        throw "Usuario Inexistente";
    }
    if(ce){
        throw "El usuario ya cuenta con un centro registrado";
    }
    // if(verifyUserNotCentro){
    //     throw "Usuario con centro registrado";
    // }
    const newCentro = new centroAcopioModel(centro);
    const centroCreate = await newCentro.save();
    return centroCreate
}

module.exports={
    newCentroAcopio,
    verifyUserNotCentro
}