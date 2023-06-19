# Chess Note Apps

## Stack

- MERN (MongoDB, Express, React, Node)

# Usage (run fullstack app on your machine)

## Prerequisites

- [MongoDB](https://www.mongodb.com/)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need backend and frontend runs concurrently in different terminal session, in order to make them talk to each other

## Server-side usage(PORT: 6000)

```terminal
$ cd backend    // go to backend folder
$ npm i         // npm install packages
$ npm run dev   // run it locally
$ npm run build // this will build the server code to es6 js codes and generate a dist file
```

## Client-side usage(PORT: 3000)

```terminal
$ cd frontend        // go to frontend folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for frontend app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

# Live Demo Coding Application

https://chessnoteapp-frontend.onrender.com/
