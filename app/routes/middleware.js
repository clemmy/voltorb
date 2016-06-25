import UserModel from '../models/User'

export async function checkAuth(req, res, next) {
  const { memberId } = req.body

  if (!memberId) {
    return next(new Error('Must provide "memberId" in request body'))
  }

  let user
  try {
    user = await UserModel.findOne({memberId});
    console.log(user)
    if (!user) {
      // check if it exists and act accordingly
    }
  } catch(err) {
    return next(err);
  }
}
