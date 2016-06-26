import axios from 'axios'
import UserModel from '../models/User'
import Utils from '../utils'

export async function checkAuth(req, res, next) {
  const { memberId, firstName, lastName } = req.body

  if (!memberId) {
    return next(new Error('Must provide "memberId" in request body'))
  }

  try {
    const token = await Utils.getToken()
    const response = await axios({
      method: 'post',
      url: 'https://platform.pokitdok.com/api/v4/eligibility/',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: {
        member: {
          first_name: firstName,
          last_name: lastName,
          id: memberId
        },
        trading_partner_id: 'MOCKPAYER'
      }
    })

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
