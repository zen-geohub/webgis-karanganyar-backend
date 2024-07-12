const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed')
    console.log(error);
  }
}

module.exports = connectDB