const mongoose = require('mongoose')
const { Schema } = mongoose
const AdminSchema = new Schema(
  {
    fullname: {
      type: String,
      maxLength: 64,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Admin', AdminSchema)
