import UserModel from '../models/User.js'
import Utils from '../utils'
import _ from 'lodash'

export async function authenticate(req, res, next) {
  const cleanedData = Utils.transformData(req.user.cached)

  console.log(cleanedData)
  console.log(cleanedData.planCategories.medical)

  try {
    req.user.provider = cleanedData.provider
    await req.user.save()
    
    res.json({
      token: req.user.memberId,
      user: _.omit(req.user._doc, ['cached']),
      created: req.created
    })
  } catch (err) {
    return next(err)
  }
}
