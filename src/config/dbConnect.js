import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://braiansantos_db_user:Oj8RwOWIMpDY637e@cluster0.boily7p.mongodb.net/Livraria?appName=Cluster0",
  );

  return mongoose.connection;
}

export default conectaNaDatabase;
