import axios from 'axios'
import _ from 'lodash'
import constants from '../constants'
import testerFixture from '../../fixtures/members/TESTER.json'

function fuzzyFindPair(deductibles) {
  let results = []
  let deductible = _.find(deductibles, (d) => d.time_period === 'calendar_year')

  if (deductible) {
    results.push(deductible)
  } else {
    return null
  }

  let deductible2 = _.find(deductibles, (d2) => {
    return _.isEqual(d2.service_types, deductible.service_types) &&
      d2.coverage_level === deductible.coverage_level &&
      d2.in_plan_network === deductible.in_plan_network &&
      d2.time_period !== deductible.time_period
  })

  if (deductible2) {
    results.push(deductible2)
  }

  return results
}

function getCategory(serviceType) {
  for (let categoryKey in constants.planCategory) {
    const category = constants.planCategory[categoryKey]

    if (category.serviceTypes.includes(serviceType)) {
      return categoryKey
    }
  }

  return '?'
}

function getFormattedPlanCategoryData(rawDeductibles, rawCopay, rawCoinsurance) {
  let data = {}
  let deductibles = _.cloneDeep(rawDeductibles)

  let deductiblePair = fuzzyFindPair(deductibles)
  while (!_.isEmpty(deductiblePair)) {
    const serviceKey = deductiblePair[0].service_types[0]
    const categoryKey = getCategory(serviceKey)

    if (!data[categoryKey]) {
      data[categoryKey] = {}
    }

    if (!data[categoryKey][serviceKey] || deductiblePair[0].coverage_level === 'individual' || deductiblePair[0].in_plan_network === 'yes') {

      const copayForDeductible = _.find(rawCopay, (copay) => {
        return copay.service_types.includes(serviceKey)
      })
      const coinsuranceForDeductible = _.find(rawCoinsurance, (coinsurance) => {
        return coinsurance.service_types.includes(serviceKey)
      })

      data[categoryKey][serviceKey] = {
        deductible: {
          currency: deductiblePair[0].benefit_amount.currency,
          total: deductiblePair[0].benefit_amount.amount,
          remaining: deductiblePair.length === 2 ? deductiblePair[1].benefit_amount.amount : -1,
          spent: deductiblePair.length === 2 ? (parseInt(deductiblePair[0].benefit_amount.amount) - parseInt(deductiblePair[1].benefit_amount.amount)).toFixed(2) : -1
        },
        copay: copayForDeductible ? {
          currency: copayForDeductible.copayment.currency,
          amount: copayForDeductible.copayment.amount
        } : {
          currency: rawCopay[0].copayment.currency,
          amount: rawCopay[0].copayment.amount
        },
        coinsurancePercent: coinsuranceForDeductible ? coinsuranceForDeductible.benefit_percent : rawCoinsurance[0].benefit_percent
      }

      if (parseInt(data[categoryKey][serviceKey].copay.amount) === 0) {
        delete data[categoryKey][serviceKey].copay
      }
    }

    _.forEach(deductiblePair, (deductible) => {
      deductibles.splice(deductibles.indexOf(deductible), 1)
    })
    deductiblePair = fuzzyFindPair(deductibles) // for next iteration
  }

  return data
}

function getToken() {
  return axios({
    method: 'post',
    url: 'https://platform.pokitdok.com/oauth2/token',
    headers: {
      'Authorization': 'Basic Z1B4VE1EcFdGY0N2VFRWNlZRYkg6bnZLcmlVUVVCTVc1NjYzVG01cEd3OWZJT2pIWnJHZ09La04yVEZMYwo='
    },
    data: 'grant_type=client_credentials'
  }).then((response) => response.data.access_token)
}

export default {
  getToken,
  fetchUser: function(firstName, lastName, memberId) {
    if (memberId === 'TESTER') {
      return new Promise(function(resolve, reject) {
        resolve({
          data: {
            data: testerFixture
          },
          status: 200
        })
      })
    }

    return getToken().then((token) => {
      return axios({
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
    })
  },
  transformData: function(rawData) {
    return {
      memberId: rawData.subscriber.id,
      planNumber: rawData.coverage.plan_number,
      planDescription: rawData.coverage.group_description,
      provider: rawData.provider,
      planCategories: getFormattedPlanCategoryData(rawData.coverage.deductibles, rawData.coverage.copay, rawData.coverage.coinsurance)
    }
  }
}
