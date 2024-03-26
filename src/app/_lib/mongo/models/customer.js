import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
  {
    _id: [Schema.Types.ObjectId],
    name: String,
    contactNo: String,
    emai: String,
    businessName: String,
    businessContactNo: String,
    businessSecondaryContactNo: String,
    address: String,
    orderCycleCount: Number,
    isActive: Boolean
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model.Customer || mongoose.model('Customer', customerSchema);

export default Customer;