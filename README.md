# CI 102 Lab 61 Group 08

# Getting started
## Dependencies:
- Node JS
- React JS

Instructions on installation of dependencies is below.

Be sure to follow this sequentially if you are setting up for the first time.

## Setting Up The Project:
1. In gitlab, click on your profile near the top left of the screen.
2. Click edit profile then, access tokens on the left.
3. Click add new token.
4. Create a new token name under Token Name, and under Select scopes, check read_repository and write_repository.
5. Click Create personal access token.
6. Save the token somewhere such as in a text file or word document.
7. Copy the token.
8. Open up a terminal. If you are on windows press ctrl+R and type in cmd and hit enter. If you are on  Mac press Command+Space to open Spotlight Search and type “Terminal” in the search field. Then, press Enter to open the Terminal app.
9. In the terminal type cd followed by the path you would like to store the project. Example: 
```
cd C:\Users\USERNAME\Desktop
```
10. Once you are in your desired path, type: 
```
git clone https://gitlab.cci.drexel.edu/fds24/ci10x-student-teams/61/08/ci-102-lab-61-group-08.git
```
11. Press enter.
12. A prompt will appear asking you to authenticate. Enter your drexel email (e.g., abc123@drexel.edu) and the copied access token for the password. Hit enter.
13. Setup complete!

## Installing Dependencies and Additional Setup
Before installing dependencies, please be sure to complete the setting up the project section.

**Instaling Node JS:**

1. In your favorite browser, type node js. Click on the first link. It should be something like, nodejs.org
2. Find the download section on the website.
3. Download the latest version of node js. Be sure to select the version for your OS.
4. Run the binary file after it completes downloading.
5. Follow the prompts until the install is complete.

**Additional Setup**
1. Open up a terminal. If you are on windows press ctrl+R and type in cmd and hit enter. If you are on  Mac press Command+Space to open Spotlight Search and type “Terminal” in the search field. Then, press Enter to open the Terminal app.
2. cd into the project path (root).
3. cd into the backend.
```
cd .\backend\
```
4. When you are in the backend folder, type the following commands:
```
npm install
```
5. Test by running the backend with the following command (i.e., press ctrl+c to terminate the operation when finished).
```
node .
```

**Instaling React JS:**

1. Open up a terminal. If you are on windows press ctrl+R and type in cmd and hit enter. If you are on  Mac press Command+Space to open Spotlight Search and type “Terminal” in the search field. Then, press Enter to open the Terminal app.
2. cd into the project path (root).
3. When you are in the project path, issue the following commands:
```
cd .\foot-traffic-frontend\ -- Press Enter
npm install --save-dev @babel/core @babel/preset-env babel-loader @babel/preset-react
npm install --save react react-dom
```
4. Test by running the react-app (i.e., if successful, the project should open in a new window).
```
npm run start
```
Dependency installation complete!

# Post Setup
## Testing

To test the project complete the following **sequentially**.

1. Open two seperate terminal windows.
2. In both terminal windows head into your project root directory.
3. In the first terminal issue the following commands:

This will start the react-app. 

Note: The react-app will not be populated until the backend is started.

```
cd .\foot-traffic-frontend\
npm run start
```
4. In the second terminal issue the following commands:
```
cd .\backend\
node .
```

This will start the backend API.

After some time, the backend API shall complete initialization and you should see results populate on the react-app that was opened in a window.


## Deploying and Changing the codebase

**Adding files**

To add files to the project complete the following steps:

1. Open a terminal window.
2. Copy the path of the file you would like to add.

Note: This file must be located within the project folder.

Issue the following command:
```
git add [PATH TO FILE]
```

**Pushing & Committing Changes**

Note: To push and commit changes/files, file(s) must be added/ staged. This can be accomplished with the step above.

To push and commit changes, complete the following steps:

1. Open a terminal window and cd into your project root.
2. Issue the following commands:
```
git commit -m "[COMMIT MESSAGE]"
git push
```

**Updating the codebase**

To ensure everything is up to date and your local verision is the newest complete the following steps:

1. Open a terminal window and cd into your project root.
2. Issue the following command:
```
git pull
```
