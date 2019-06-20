const server = require("./src/server");

const port = 9090;

server.listen(port,()=>{
    console.log("Service running on port 9090");
});