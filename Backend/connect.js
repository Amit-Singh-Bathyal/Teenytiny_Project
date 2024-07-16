
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
async function connectMongoDB(url) {
  return mongoose.connect(url);
}



const connect = mongoose.connect("mongodb://localhost:27017/Login");


connect.then(() => {
  console.log("Database Connected Successfully");
})
.catch(() => {
  console.log("Database cannot be Connected");
})


const LoginSchema = new mongoose.Schema({
  name: {
      type:String,
      required: true
  },
  password: {
      type: String,
      required: true
  }
});


const collection = new mongoose.model("users",LoginSchema);


module.exports = {
  collection,
  connectMongoDB
};
