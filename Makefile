#
#	LiBRO Makefile
#	
#	AUTHOR
#	Andric Quinn Baticos
#

# dev-dbuild:
# 	mysql -u root -p pisara < ./database/pisara.sql

install-node-modules:
#	cd backend && npm install bcryptjs --save --save-dev --save-prod					# Bcrypt.JS: password hashing
#	cd backend && npm install cors --save --save-dev --save-prod						# Cors: server permission
	cd backend && npm install express --save --save-dev --save-prod						# Express: Web Framework
#	cd backend && npm install local-storage --save --save-dev --save-prod				# Local Storage: session handling
#	cd backend && npm install markdown-it --save --save-dev --save-prod					# Markdown-It: Markdown Parser
#	cd backend && npm install mysql --save --save-dev --save-prod						# MySQL: database connection
	cd backend && npm install nodemon --save --save-dev									# Nodemon: Monitor script for use during NodeJS app development

# install-react-modules:
# 	cd frontend && npm install dotenv --save --save-dev --save-prod									# Dotenv: Next JS configuration
# 	cd frontend && npm install isomorphic-unfetch --save --save-dev --save-prod						# Isomorphic Fetch: requests
# 	cd frontend && npm install semantic-ui-react semantic-ui-css --save --save-dev --save-prod		# Semantic UI React: ui framework
# 	cd frontend && npm install sweetalert --save --save-dev --save-prod								# Sweet Alert: popups
