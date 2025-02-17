import mongoose from "mongoose";

class dbClient {
  constructor() {
    this.connectDB();
  }
  async connectDB() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/taskmanager?retryWrites=true&w=majority`;
    await mongoose.connect(queryString);
  }

  async closeConnection() {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.error("Error closing the connection: ", error);
    }
  }
}

export default new dbClient();
