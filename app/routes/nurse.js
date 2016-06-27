import Constants from '../constants'
import axios from 'axios'
import _ from 'lodash'

const keywordMapping = {
  hospital: ['hospital', 'emergency', 'injury', 'injured', 'broken', 'broke', 'hurt', 'fatal', 'ambulance'],
  dental: ['teeth', 'dental', 'orthodontist', 'clean', 'braces', 'cavity', 'fillings'],
  medical: ['medical', 'medicine', 'clinic', 'sick', 'flu', 'cold'],
  vision: ['blurry', 'vision', 'strain', 'glasses', 'blind']
}

// try to find the word "broken/broke" as well
function tryToGetContext(entities, message, user) {
  let hospitalCount = 0
  let dentalCount = 0
  let medicalCount = 0
  let visionCount = 0

  // edge case
  const split = message.split(' ')
  if (split.includes('broke') || split.includes('broken')) {
    hospitalCount++
  }

  // group all the entities up
  // find matches in each category
  // return category with most keyword count
  // if 0 in all, return unknown
  _.forEach(entities, function(entity) {
    _.forEach(entity.matches, function(match) {
      _.forEach(match.original_text.split(' '), function(token) {
        if (keywordMapping.hospital.includes(token)) {
          hospitalCount++
        }
        if (keywordMapping.dental.includes(token)) {
          dentalCount++
        }
        if (keywordMapping.medical.includes(token)) {
          medicalCount++
        }
        if (keywordMapping.vision.includes(token)) {
          visionCount++
        }
      })
    })
  })

  let nurseResponse
  if (!hospitalCount && !dentalCount && !medicalCount && !visionCount) {
    nurseResponse = Constants.nurseMessages.unknown.msg
  } else {
    if (hospitalCount > dentalCount && hospitalCount > medicalCount && hospitalCount > visionCount) {
      nurseResponse = user.categories.hospitalRepairs ? Constants.nurseMessages.hospital.covered.msg : Constants.nurseMessages.hospital.notCovered.msg
    } else if (dentalCount > hospitalCount && dentalCount > medicalCount && dentalCount > visionCount) {
      nurseResponse = user.categories.teeth ? Constants.nurseMessages.dental.covered.msg : Constants.nurseMessages.dental.notCovered.msg
    } else if (medicalCount > dentalCount && medicalCount > hospitalCount && medicalCount > visionCount) {
      nurseResponse = user.categories.medical ? Constants.nurseMessages.medical.covered.msg : Constants.nurseMessages.medical.notCovered.msg
    } else { // bug when equal counts
      nurseResponse = user.categories.eye ? Constants.nurseMessages.vision.covered.msg : Constants.nurseMessages.vision.notCovered.msg
    }
  }

  return nurseResponse
}

export async function message(req, res, next) {

  let { memberId, message } = req.body

  try {
    let response = await axios({
      method: 'post',
      url: 'https://api.havenondemand.com/1/api/sync/extractentities/v2?text=' + message + '&entity_type=drugs_eng&entity_type=medical_conditions_eng&entity_type=medical_conditions&show_alternatives=false&apikey=30251e55-5c86-4188-bb70-3046924d4d48'
    })

    const messageContext = tryToGetContext(response.data.entities, message, req.user)

    res.json({
      message: messageContext
    })
  } catch (err) {
    return next(err)
  }
}
