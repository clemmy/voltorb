import UserModel from '../models/User.js'
import _ from 'lodash'

export async function authenticate(req, res, next) {
  res.json({
    token: req.user.memberId,
    user: req.user
  })
}
