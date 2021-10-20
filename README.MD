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

C. Connect database (MongoDb Atlas):

1. Login to MongoDB.
2. Click on Connect.
3. Copy link. Remember password.
4. Create .env file. As per convention, use MONGO_URI = <paste link here>. Swap <password> for the password. Swap <FirstDatabase> with a name of your choice. 
5. Create a file connect.js in a folder called DB.
6. Import mongoose. 
7. create a function that takes a url and returns mongoose.connect(url).
8. Export the function and import it in app.js
9. Create a start function, asyncronous, with a try and catch block. First invoke the connectdb function and here you pass in process.env.MONGO_URI. use await
10.Followed by app.listen. Add a port and a console.log to check if the connection is established. If yes, server is listening yadda yadda will be printed in the console.

