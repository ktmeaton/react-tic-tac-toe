# React Tutorial

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project follows the [Tic Tac Toe Tutorial](https://reactjs.org/tutorial/tutorial.html).

## Installation

### Setup

1. Create an empty GitHub repository first (ex. ktmeaton/react-tutorial).
1. Open with Gitpod (comes with node.js ).

### Create Basic App

1. Create an app within the GitHub repository (app will share name).

   ```
   npx create-react-app .
   ```

   This creates the following directories:  

       * node_modules
       * public
       * src

    This creates the following files:  
       * package.json
       * README.md
       * yarn.lock 

1. Test that react basic installation worked:

   ```
   npm run start
   ```

   This opens a browser preview on port:3000.

### Deploy Basic App

1. Install gh-pages package.

npm install gh-pages --save-dev

1. Add deploy properties to ```package.json```:

   ```
   //...
   "homepage": "http://ktmeaton.github.io/react-tic-tac-toe",
   //...
   "scripts": {
     //...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

1. Generate a production build of your app, and deploy it to GitHub Pages. 

   The site is now available [here][(https://ktmeaton.github.io/react-tic-tac-toe/).

1. Remove all of the demo content in src:

   ```
   rm -f src/*
   ```

1. Create new CSS and Javascript content for your app.

   ```
   touch src/index.css
   touch src/index.js
   ```