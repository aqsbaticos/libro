/*
*	LiBRO: Router
*	CMSC 190 Special Problems
*
*	DATE-WRITTEN: April 23, 2024
*	LAST UPDATED: April 23, 2024
*	
*	AUTHOR
*	Andric Quinn Baticos
*
*	This file serves as the communication between the server and the controllers.
*	Import this file to any javascript program to be able to call the methods that are in the controllers imported.
*/

'use strict';

//	---------------------------------------------------------------------------------------------------- FILE DEPENDENCIES
// const controller = require(__dirname + '/../controllers/controller');
// const controller_auth = require(__dirname + '/../controllers/controller_auth');

//	---------------------------------------------------------------------------------------------------- ROUTES
module.exports = (app) => {

	// app.get('/', controller.landing);

	//	----------------------------------------------------------------------------------------------------	GET METHODS

		//	AUTHENTICATION
		// app.get('/check', controller_auth.check_user_session);

		//	USER
		// app.get('/user/admin/:username', controller_user.findAdmin);

	//	----------------------------------------------------------------------------------------------------	POST METHODS

		//	AUTHENTICATION
		// app.post('/login', controller_auth.login);
		// app.post('/logout', controller_auth.logout);

		//	USER
		// app.post('/signup/admin', controller_user.signupAdmin);
		// app.post('/signup/organizer', controller_user.signupOrganizer);
}

//	---------------------------------------------------------------------------------------------------- END OF FILE
