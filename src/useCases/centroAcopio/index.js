const centroAcopioModel = require("../../models/centroAcopio").model;
const userCases = require("../user/index");

const newCentroAcopio = async(centro)=>{

    const userExist = await userCases.verifyIdUsuario(centro.id_usuario);
    

    if(!userExist){
        throw "Usuario Inexistente";
    }
    const newCentro = new centroAcopioModel(centro);
    const centroCreate = await newCentro.save();
    return centroCreate
}

module.exports={
    newCentroAcopio
}