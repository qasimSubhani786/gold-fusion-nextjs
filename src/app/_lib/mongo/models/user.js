import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id: [Schema.Types.ObjectId],
    fullName: String,
    contactNo: String,
    emergencyContactNo: String,
    email: String,
    role: String,
    joiningDate: String,
    salary: String,
    comissionBased: String,
    isActive
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;