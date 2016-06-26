import wrap from 'express-async-wrap'
import * as middleware from './middleware'
import * as userRoutes from './user'
import * as serviceRoutes from './service'

/* All POST requests and non-RESTful because of front end dev's time limitations and load balancing between our tasks */ 
module.exports = function (app) {
	app.post('/api/authenticate', middleware.checkAuth, middleware.getUser, wrap(userRoutes.authenticate))
	// app.put('/api/users/:userId', checkAuth, getUser, wrap(userRoutes.update))
	app.post('/api/getUser', middleware.checkAuth, middleware.getUser, wrap(userRoutes.getSelf))

	app.post('/api/user/family', middleware.checkAuth, middleware.getUser, wrap(userRoutes.addFamilyMember))

	app.post('/api/user/categoriesToDisplay', middleware.checkAuth, middleware.getUser, wrap(userRoutes.updateCategoriesToDisplay))

	app.post('/api/service/types', wrap(serviceRoutes.read))
}
