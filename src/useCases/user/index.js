const userModel = require("../../models/users").model;

const findAllUsers = async()=>{
    return await userModel.find({}).exec();
}

const newUser = async(data)=>{
    let valid = [];
    const email = await verifyEmail(data.email);
    const phone = await verifyPhone(data.telefono);
    const name = await verifyName(data.nombre);
    if(email===true){
        valid.push("Email Existente");
    }
    if(phone===true){
        valid.push("Telefono Existente");
    }
    if(name===true){
        valid.push("Nombre existente");
    }
    if(email===true || phone===true || name===true){
        throw valid;
    }else{
        const newUser = new userModel(data);
        const userCreated = await newUser.save();
        return userCreated;
    } 
}
const verifyEmail = async(email)=>{
    const temail = await userModel.findOne({email});
    if(temail===null) return false;
    return true;
}
const verifyPhone = async(telefono)=>{
    const telephone = await userModel.findOne({telefono});
    if(telephone===null) return false;
    return true
}
const verifyName = async(nombre)=>{
    const tname = await userModel.findOne({nombre});
    if(tname===null)return false;
    return true;
}
const updateUser = async(data)=>{
    return userModel.findOneAndUpdate(data);
}

const deleteUser = async(id)=>{
    return userModel.findByIdAndDelete(id).exec();
}

module.exports={
    findAllUsers,
    newUser,
    updateUser,
    deleteUser
}