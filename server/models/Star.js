import mongoose from 'mongoose'
import { GALAXY } from '../db/Collections.js'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const StarSchema = new Schema(
  {
    name: { type: String, required: true, minlength:2 },
    //ties star to galaxies
    galaxyId: { type: ObjectId, required: true, ref: GALAXY}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
