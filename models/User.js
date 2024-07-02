import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min : 3,
    max:30,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User
