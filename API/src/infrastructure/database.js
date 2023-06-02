const mongoose = require("mongoose");

const uri = `mongodb+srv://root:root@cluster0.yzftv.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
   id: {
      type: String,
      index: true,
      unique: true,
   },
   email: {
      type: String,
      unique: true,
   },
   nome: String,
   senha: String,
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = {
   UserModel,
};
