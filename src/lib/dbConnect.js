import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export async function connectToDatabase() {
  if (isConnected) {
    // Use existing connection if already connected
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1; // Set connection state
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Failed to connect to the database");
  }
}

