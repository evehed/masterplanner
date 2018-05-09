# Master Planner
We are making a webpage called "The Master Planner". The purpose of the page is that you can see what courses are aviable for the two master years and in what period/semester they are taken in. You can search for courses in each semester and in what period they are given, as well as searching by free text. In a sidebar on the side you can see a overview of your choices and go between year 1 and year 2 in the master. This page is for Media Technology only. You can sign up and then log in with your email and then your chosen courses will be saved until next time you log in.

## Installing and running:
* npm install install dependencies
* npm start   start development server

```
## Project Structure:
Project Root (MasterPlanner)/
├── package.json
├── package-lock.json
├── public (Static content)
│   └── index.html
├── README.md 
├── .firebaserc
├── node_modules
└── src
    ├── components (vue components)
    ├── App.vue
    ├── main 
    └── router.js 
```

## Features:
* Authentification
* Search
* Change information to database (firebase)

## Used API:s:
* [KTH API](https://www.kth.se/api/kopps/)
* [Firebase API](https://firebase.google.com/)

## Flaws:
* When you are logged in on the page and update it, you will no longer be logged in. Simply press log out and log in again.
* No real-time update to the KTH API. The API call was only made once and the information was sent to the database where we now do the call from. To find API call to KTH API, go to functions -> index.js.

This project used Vue, Vue Multiselect, Firebase and Bootstrap.
