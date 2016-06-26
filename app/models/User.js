import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  memberId: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  birthDate: {
    type: Date
  },
  cached: {
    type: mongoose.Schema.Types.Mixed
  },
  provider: {
    npi: String,
    location: {
      address: String,
      city: String,
      zipcode: String,
      state: String
    },
    phone: String,
    name: String
  },
  plan: {
    number: String,
    description: String
  },
  categories: {
    type: mongoose.Schema.Types.Mixed
  },
  family: {
    type: mongoose.Schema.Types.Mixed
  }
})

export default mongoose.model('User', userSchema)
