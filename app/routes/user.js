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

export async function getSelf(req, res, next) {
  const { memberId, firstName, lastName } = req.body

  res.json(_.omit(req.user._doc, ['cached']))
}

export async function addFamilyMember(req, res, next) {
  const { memberId, family } = req.body

  try {
    const response = await Utils.fetchUser(family.firstName, family.lastName, family.memberId)

    if (response.status !== 200) {
      throw new Error('Error getting user from pokitdok database')
    }

    const familyData = response.data.data
    const cleanedFamilyData = Utils.transformData(familyData)

    if (!req.user.family) {
      req.user.family = {}
    }

    req.user.family[cleanedFamilyData.memberId] = {
      firstName: familyData.subscriber.first_name,
      lastName: familyData.subscriber.last_name,
      memberId: familyData.subscriber.id,
      dob: familyData.subscriber.birth_date,
      categories: cleanedFamilyData.planCategories
    }

    req.user.save()

    res.json(req.user.family[cleanedFamilyData.memberId])

  } catch(err) {
    return next(err)
  }
}

// expect categories to be an array of strings
export async function updateCategoriesToDisplay(req, res, next) {
  const { memberId, categories } = req.body

  req.user.categoriesToDisplay = categories

  try {
    await req.user.save()
  } catch (err) {
    return next(err)
  }

  res.json(req.user.categoriesToDisplay)
}
