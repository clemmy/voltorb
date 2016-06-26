import axios from 'axios'
import UserModel from '../models/User'
import Utils from '../utils'

export async function checkAuth(req, res, next) {
  console.log('checkAuth')
  const { memberId, firstName, lastName } = req.body

  if (!memberId) {
    return next(new Error('Must provide "memberId" in request body'))
  }

  try {
    const response = await Utils.fetchUser(firstName, lastName, memberId)

    if (response.status !== 200) {
      throw new Error('Error getting user from pokitdok database')
    }

    req.cachedResponse = response.data.data
    next()

  } catch(err) {
    return next(err)
  }
}

export async function getUser(req, res, next) {
  console.log('getUser')
  const {
    memberId,
    firstName,
    lastName
  } = req.body

  try {
    let user = await UserModel.findOne({memberId});

    if (!user) {
      user = new UserModel({
        memberId,
        firstName,
        lastName,
        cached: req.cachedResponse
      })
      await user.save()
      req.created = true
    }

    req.user = user
    next()
  } catch(err) {
    return next(err);
  }
}
