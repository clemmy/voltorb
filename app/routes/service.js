import Constants from '../constants'

export async function read(req, res, next) {
  res.json(Constants.serviceTypes)
}
