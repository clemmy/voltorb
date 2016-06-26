import wrap from 'express-async-wrap'
import * as middleware from './middleware'
import * as userRoutes from './user'

module.exports = function (app) {
	app.post('/api/authenticate', middleware.checkAuth, middleware.getUser, wrap(userRoutes.authenticate))
	// app.put('/api/users/:userId', checkAuth, getUser, wrap(userRoutes.update))
	app.post('/api/getUser', middleware.checkAuth, middleware.getUser, wrap(userRoutes.getSelf))

	app.post('/api/user/family', middleware.checkAuth, middleware.getUser, wrap(userRoutes.addFamilyMember))
}
