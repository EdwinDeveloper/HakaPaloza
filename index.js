const server = require("./src/server");
const db = require("./src/lib/db");

const port = 9090;

server.listen(port,()=>{
    console.log("Service running on port 9090");
    db.connect()
         .then(()=> console.log("Connected to the data base"))
         .catch(()=> console.log("Error Conection (Be sure to run the mongod service)"))
});