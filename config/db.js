const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");

    const mongoURI =
      process.env.MONGO_URI || "mongodb+srv://pritammore1001_db_user:Pritam1001@cluster0.icsfpbl.mongodb.net/aits_db?appName=Cluster0";

    // ✅ NO OPTIONS HERE (IMPORTANT)
    await mongoose.connect(mongoURI);

    console.log("✅ MongoDB connected successfully");
    console.log(`📁 Database: ${mongoose.connection.name}`);

    return true;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    return false;
  }
};

module.exports = connectDB;