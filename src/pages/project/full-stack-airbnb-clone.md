---
layout: ../../layouts/Project.astro
title: Full stack Airbnb clone
description: This is a full-stack web application build from scratch by my self for practicing web development skills.
heroImage: hero-full-stack-airbnb-clone.png
githubLink: https://github.com/huyuhong0205/full-stack-airbnb-clone
---

# Full stack airbnb clone

This is a full-stack web application build from scratch by my self for practicing web development skills.

[https://fullstack-bnb-clone-client.vercel.app/](https://fullstack-bnb-clone-client.vercel.app/)

**IMPORTANT** :
The backend server will automatically shut down after 15 minutes of inactivity. If an error occurs during your visit, please wait for the server to restart.

### Test accounts

```
accounts: user001@test.com - user005@test.com
password: password
```

or you can register by your self

**IMPORTANT** :
My server is hosted on [Render's](https://render.com/) free plan there are some limitations. So I did not provide landlord accounts, some feature please see the [OVERVIEW](#overview) below or clone this repo [(see instruction)](#run-this-project) to test.

## Technic

- Typescript
- React
- Sass
- Node.js
- Express
- MongoDB

## Project Structure

### Front end

```
PROJECT_ROOT
├── public              # static assets
├── src
│   ├── assets          # assets
│   ├── components      # React components
│   ├── hooks           # custom hooks
│   ├── pages           # page files
│   ├── store           # Redux store and slices
│   ├── styles          # Sass mixin and css variables
│   ├── types           # type of REST api response
│   └── utils           # utility functions
└── ssl                 # SSL certificate for using https in Vite dev server
```

### Back end

```
PROJECT_ROOT
├── env                 # environment variables
├── public              # server static files
└── src
    ├── config-env      # script for configuration environment variables
    ├── controllers
    ├── middleware
    ├── models          # MongoDB document models
    ├── routes          # server routes
    ├── types
    │   └── declare     # typescript declare types
    └── utils           # utility functions

```

## Overview

_All pages support RWD (responsive web design)._

### Home page

<iframe width="560" height="315" src="https://www.youtube.com/embed/86cd4XQpRgk" title="full stack airbnb clone | home page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe>

- Implement infinite scrolling using Intersection Observer, in conjunction with a Node.js pagination API.

### Search rooms page

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZ7oIj7qcw0" title="full stack airbnb clone | search rooms page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Utilize MongoDB queries for location-based searches.
- Use the Google Maps JavaScript API to display a map and markers for rooms. You can also interact with the markers on the map.

### Room detail page

<iframe width="560" height="315" src="https://www.youtube.com/embed/QnsXmrDdufE" title="full stack airbnb clone | room detail page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- You can booking room on this page, of course only logged-in users are allowed.

### Authentication page

<iframe width="560" height="315" src="https://www.youtube.com/embed/bFVf1PZNPgM" title="full stack airbnb clone | authentication page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Sign up and login.
- Use custom hooks to validate user input for better user experience.
- Also validate user input in server side to ensure security.
- Use JWT and Cookies for user authentication.
- Manage authentication and authorization state using Redux.

### Profile page

<iframe width="560" height="315" src="https://www.youtube.com/embed/RfNZfsCrMuE" title="full stack airbnb clone | profile page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- Profile photo upload.
- Modify user information and change password.
- Logout.

### My bookings page

<iframe width="560" height="315" src="https://www.youtube.com/embed/eAPvVWhiemQ" title="full stack airbnb clone | my bookings page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- View user's bookings.

### My rooms page & Edit room page

<iframe width="560" height="315" src="https://www.youtube.com/embed/6ugjRhrI-pY" title="full stack airbnb clone | my rooms page and edit room page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- _landlords only_.
- Manage host's rooms.
- Edit room information.
- Delete room. Only rooms without orders can be deleted.

### Create room page

<iframe width="560" height="315" src="https://www.youtube.com/embed/mk7a7ACzRNw" title="full stack airbnb clone | create room page" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

- _landlords only_.
- Upload multiple images.
- Using Google Geocoding API converts the address into latitude and longitude coordinates.
- Support hosts to write descriptions using Markdown.

## Libraries

### Front end

- [vite](https://vitejs.dev/) - Front end development tools.
- [react](https://react.dev/)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-redux](https://react-redux.js.org/), [redux-toolkit](https://redux-toolkit.js.org/) - Application wide state management.
- [react-date-range](https://www.npmjs.com/package/react-date-range) - A date range picker component.
- [react-icons](https://www.npmjs.com/package/react-icons) - Include popular icons in React projects easily.
- [react-markdown](https://www.npmjs.com/package/react-markdown) - React component to render markdown.
- [react-transition-group](https://www.npmjs.com/package/react-transition-group) - Exposes simple components useful for defining entering and exiting transitions.
- [google-maps-react-markers](https://www.npmjs.com/package/google-maps-react-markers) - Easy way to render custom markers in google-maps-javascript-api.

### Back end

- [express](https://expressjs.com/) - Back end web application framework for node.js.
- [express-validator](https://www.npmjs.com/package/express-validator) - An express middleware for validate http request data and sanitize XSS.
- [express-mongo-sanitize](https://www.npmjs.com/package/express-mongo-sanitize) - Against NoSQL query injection.
- [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.
- [cors](https://www.npmjs.com/package/cors) - For providing a Connect/Express middleware that can be used to enable CORS with various options.
- [dotenv](https://www.npmjs.com/package/dotenv) - Loads environment variables from a .env file into process.env.
- [helmet](https://www.npmjs.com/package/helmet) - Helps you secure your Express apps by setting various HTTP headers.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for handling multipart/form-data.
- [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings Fetch API to Node.js.
- [sharp](https://www.npmjs.com/package/sharp) - Node.js image processing.

### Linting

- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)

## Run this project

If you want to clone this repo for testing, you will need some additional setup.

### Client

1. add a `./.env` file

```
VITE_SERVER_API={{YOUR_SERVER_URL}}/api/v1
VITE_SERVER_ROOM_IMG={{YOUR_SERVER_URL}}/images/room/
VITE_SERVER_USER_IMG={{YOUR_SERVER_URL}}/images/profile/

VITE_GOOGLE_KEY={{YOUR_GOOGLE_CLOUD_API_KEY}}
```

### server

1. add a `./env/config.env` file

```
NODE_ENV='development'

DB='{{YOUR_MONGODB_CONNECTION_STRING}}'
DB_PASS='{{YOUR_MONGODB_CLOUD_PASSWORD}}'

PORT=3000

JWT_SECRET='{{YOUR_JWT_SECRET}}'
JWT_EXPIRES='30d'
JWT_COOKIE_EXPIRES=30

GOOGLE_API_KEY='{{YOUR_GOOGLE_CLOUD_API_KEY}}'
```

2. modify the `./src/app.ts` file

```typescript
app.use(
  cors({
    origin: ['{{URL1}}', '{{URL2}}'], // CHANGE TO YOUR CLIENT SIDE URL
    credentials: true, // allow to send credentials to origins
  })
);
```

## Reference

- [Airbnb](https://www.airbnb.com/) - UI, feature
