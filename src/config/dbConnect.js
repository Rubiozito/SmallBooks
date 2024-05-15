import mongoose, { mongo } from "mongoose";

async function conectDatabase() {
  mongoose.connect(
    "mongodb+srv://rafaelrubio:bossa-Nova@cluster0.xlxidku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default conectDatabase;
