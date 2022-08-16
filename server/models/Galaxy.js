import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true, minlength:3 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

