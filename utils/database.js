import mongoose from "mongoose";

let isConnected = false // to track the connection status

export const connectToDB = async () => {

  // best practice to set the strictQuery to true
  mongoose.set('strictQuery', true)

  if(isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      userNewUrlParser: true,
      useUnifiedTopology: true
    })

    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}