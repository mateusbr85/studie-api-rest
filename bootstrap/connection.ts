import mongoose from "mongoose";

const connection:any = {};

async function mongononnect() {
    if(connection?.isConnected){
        return;
    }
    mongoose.Promise = global.Promise;
    const db = await mongoose.connect("mongodb://localhost:27017",{
        keepAlive: true,
        dbName: "appNode"
    });
    console.log("CONEXAO COM O BANCO DE DADOS ", db.connections[0].readyState == 1 ? true : false)
    connection.isConnected = db.connections[0].readyState;
}

export default mongononnect;