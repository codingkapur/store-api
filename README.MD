# STORE API

## Advanced filtering, sorting and dynamically populating databases.



### Notes:

Q. What is express.Js?
A. It is a routing and middleware web framework.
Q. What is middleware?
A. Middleware are functions that have access to the request object and the response object, and also the next middleware function in the request-response cycle.

Starting a new Node.js project:

A. Set up a basic express server:

1. Create a new folder. cd new folder.
2. Type npm init -y to create a package.json file with default values.
3. Install basic dependencies like express, mongoose, dotenv. 
4. Install nodemon as a dev dependency
5. Add "start":"nodemon app.js" in package.json under scripts.
6. In app.js, set up a basic http server with the express package. Add a console.log to the listen request. Add a get request and console.log req.method. 
7. In the terminal say npm start -> you should see 'listening on port...' in the console.
8. Go to your browser and type in 'localhost:portNo' in the address bar. Press enter. Come back to the terminal and it should contain a GET log. 
9. Server successfully set up! 

B. Implement Version Control:

1. In the root directory of this project, go to the terminal and say "git init"
2. Create a .gitignore file and add '/node_modules' in it. 
3. Add all files with git add --a.
4. Make first commit with 'git commit -m "initial commit"'
5. Create a new repository on GitHub. Give it an appropraite name. Add a short description. Copy the link.
6. In the project terminal say, 'git remote add origin (url)'
7. Push the local repository to gitHub repository by saying in the terminal 'git push origin master'
8. Now you have a local version of the project and a remote version of the project. 

C. Connect databse (MongoDb Atlas):

1. 

