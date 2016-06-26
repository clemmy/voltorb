import UserModel from '../models/User.js'
import Utils from '../utils'
import _ from 'lodash'

const providerFixture = require('../../fixtures/providers/1912301953.json')

export async function authenticate(req, res, next) {
  const cleanedData = Utils.transformData(req.user.cached)

  try {
    req.user.provider = {
      npi: providerFixture.npi,
      location: {
        address: providerFixture.locations[0].address_lines[0],
        city: providerFixture.locations[0].city,
        zipcode: providerFixture.locations[0].zipcode,
        state: providerFixture.locations[0].state
      },
      phone: providerFixture.locations[0].phone,
      name: providerFixture.locations[0].organization_name
    }
    req.user.plan = {
      number: cleanedData.planNumber,
      description: cleanedData.planDescription
    }
    req.user.categories = cleanedData.planCategories

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
