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
  }
})

export default mongoose.model('User', userSchema)
