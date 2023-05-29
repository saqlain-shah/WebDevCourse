const mongoose =requrie ("mongoose");
const UserSchema = new mongoose.Schema({
    username: {
      type: String,
     // required: true,
    //  unique: true,
    },
    email: {
      type: String,
     // required: true,
     // unique: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
 
  },


  { timestamps: true }
);

module.exports= mongoose.model("User", UserSchema);
