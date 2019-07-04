const userModel = require("../../models/users").model;
const bcrypt = require("../../lib/bcrypt");
const jwt = require("../../lib/jwt");

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
        
        const { nombre , telefono , foto , facebook , direccion , edad , email , password}=data;

        const hashPass = await bcrypt.create(password);
        console.log("NUEVO HASH : ",hashPass);
        
        const user = {
            nombre,telefono,foto,facebook,direccion,edad,email,password:hashPass
        }

        const newUser = new userModel(user);
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

const validatePassword = async(email,password)=>{
   
    const userExist = await userModel.findOne({email}).exec();
    const ha = await bcrypt.verify(password , userExist.password);
    
    return ha;
}

const logIn = async(email,password)=>{
    
    const userExist = await userModel.findOne({email}).exec();
    
    if(!userExist) throw "USER DOES NOT EXIST";
    const isValidPassword = await validatePassword(email , password);
    
    if(!isValidPassword) throw "PASSWORD INVALID!!";

    const token = await jwt.create({id:userExist._id});
    
    const userData = {
        message:"Welcome my friend",
        token
    }
    return userData;
}

module.exports={
    findAllUsers,
    newUser,
    updateUser,
    deleteUser,
    logIn
}