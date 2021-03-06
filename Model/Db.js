const mongoose =require('mongoose');


const mongoURL ="";
const connectDB = async () => {
    try {
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true
      });
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;