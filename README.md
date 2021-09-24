# Express Basics
## What we will answer
	- What is happening when someone use the web? Or specifically, how do clients (browsers, lets say), servers and databased interact?
	- What is an API?
		-  Lets looks at some using curl and postman, and then talk about how that relates to our servers.
	- What is REST?
		- What is CRUD?
	- How can we create a server using express?
	- How do we create endpoints, like what we saw with other API's?
	- How do we get info into out server from the client?
	- What is middleware in express and how does it work?
	- What is a static folder and how is this used in express?

### To run the express server:

	- First make sure you are in the "expressApp" directory.
	- Next look at the package.json file. This will be where you should get into the habit of looking first.
		- This file will tell you what external dependencies are going to be downloaded in the next step.
		-  Additionally the `"scripts"` will be helpfull in how to run the app.
	- Now, run ```npm i``` This can also be ran as ```npm install```
	- At this point we can start the app (which will start the server). 
		- Run ```npm start```.
			- You may have noticed from the package.json file script for start that there is something called 'nodemon', this is an npm package (external dependency) that watches your file for a save and will re-run the server. Makes like easier when you are developing; not having to stop and start all the time manually.
	- Visiting localhost:1337 in your browser at this point should reveal a message from the server.
