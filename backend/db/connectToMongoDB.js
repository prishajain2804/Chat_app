import mangoose from "mongoose"

const connectToMongoDB = async () =>{
    try{

        await mangoose.connect(process.env.MONGO_DB_URI,);
        console.log("Connected to MOngoDB")
    }catch(error){
        console.log("Error connecting to MongoDB",error.message)
    }
}

export default connectToMongoDB