const express = require("express");
const app = express();
const cors = require("cors");

const {routeCentro} = require("./routes/CentroAcopio");
const {routeUser}=require("./routes/users");

app.use(express.json());
app.use(cors());
app.use('/centroAcopio',routeCentro);
app.use('/user',routeUser);


app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to Hakpaloza"
    });
});

module.exports=app;