import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { StarSchema } from '../models/Star.js';
import { ValueSchema } from '../models/Value'
import { GALAXY, STAR } from './Collections.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxies = mongoose.model(GALAXY , GalaxySchema)

  Stars = mongoose.model(STAR, StarSchema)
}

export const dbContext = new DbContext()
