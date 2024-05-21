## 🌴 Natours
Natours is where people can seek and meet the beauty of the beauty of the nature 

## 🪢 About

This application was developed as a final project of the course [Node.js, Express, MongoDB & More: The Complete Bootcamp 2024](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp), presented on Udemy by Jonas Schmedtmann.

## 🔨 Technologies

| Frontend | Backend |
| -------- | ------- |
| HTML     | Node.js |
| CSS      | Express |
| SASS     | MongoDB |
| Pug      | Mongoose|
| Leaflet  |         |

## 📋 Features

The first step was to develop a full complete backend API with Node.js and Express, using MongoDB as database. The API was developed to be consumed by the frontend, that was developed using Pug as template engine.

The frontend was created as a server-side rendered application, with the main goal of showing the tours available in the Natours application. The tours are shown in a card format, with a brief description and a map showing the location of the tour.

Check the API documentation [here.](https://documenter.getpostman.com/view/21264720/2sA3JT4eZ9)

API features:
- ✅ User authentication
- ✅ User authorization
- ✅ CRUD operations for tours, users and reviews
- ✅ Advanced filtering
- ✅ Sorting
- ✅ Pagination
- ✅ Aggregation
- ✅ Geospatial queries

## 🚀 How to run 

To run this application, you need to have Node.js installed in your machine. After that, you can clone this repository and run the following commands:

```bash
npm install
npm start
```

To run the application in development mode, you can use the following command:

```bash
npm run watch:js
``` 

## ❗ Important ❗

To develop this application, it was used the following 
environment variables:

> server variables
```bash
NODE_ENV
PORT
```

> database variables
```bash
CONECTION_STRING
CONECTION_STRING_SHELL
DATABASE_PASSWORD
DATABASE_USER
```

> jwt variables
```bash
JWT_SECRET
JW_EXPIRE_IN
JW_COOKIE_EXPIRES_IN
```

> email variables / mailtrap
```bash
EMAIL_HOST
EMAIL_PORT
EMAIL_USERNAME
EMAIL_PASSWORD
```

```javascript
If you want to konw more about each enviroment variable used in this project, please get in touch with me.
```

```javascript
Unfortunately I was not able to provide the deployment link for the project, since heroku does not support free plans anymore, other options as Render was considered, but the user expirience was not good enough, since the free plan does not provide a good performance :/
```