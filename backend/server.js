/*
*	LiBRO: Server
*	CMSC 190 Special Problems
*
*	DATE-WRITTEN: April 23, 2024
*	LAST UPDATED: April 23, 2024
*	
*	AUTHOR
*	Andric Quinn Baticos
*
*	This file serves as the entry file for the system, LiBRO.
*/
'use strict';

//	---------------------------------------------------------------------------------------------------- DEPENDENCIES
// const cors = require('cors');										//	middleware for permission of access to the server
const express = require('express');									//	express framework

//	---------------------------------------------------------------------------------------------------- FILE DEPENDENCIES
const router = require(__dirname + '/routes/router');				//	application features

//	---------------------------------------------------------------------------------------------------- CONSTANTS
const port = process.env.PORT || '3080';

//	---------------------------------------------------------------------------------------------------- PROGRAM START
let app, server, start;

start = () => {

	if (server) {
		server.close();
	}

	app = express();

	/* express environment settings */
	app.set('case sensitive routing', true);
	app.disable('x-powered-by');

	/* middleware packages */
	app.use(express.urlencoded({extended: true}));
	app.use(express.json());
	// app.use(cors());

	router(app);
	return app.listen(port, () => {
		console.log(`[SUCCESS] Server started. Listening on port ${port}`);
	});
}

server = start();

module.exports = {
	app,
	server
}


//	---------------------------------------------------------------------------------------------------- END OF FILE
