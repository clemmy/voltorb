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
    type: mongoose.Schema.Types.Mixed
  }
})

export default mongoose.model('User', userSchema)
