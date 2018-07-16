# Firemaker 

## A module that simplifies the usage of Firebase's email and password login as well as the email link method.

#### This package is optimized for use in Vue.js environment

```console
npm install firemaker --save
```

## To use it in your application, you need to initialize your app with firebase.

```javascript

// Initializing Firebase
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
firebase.initializeApp(config);

// This ensures that your app is ready for Firemaker!
```

## Sign Up with email and password

```javascript
import Firemaker from 'firemaker'

Firemaker('local').signUp('email', 'password')
    .then(() => { // Promise based
        // Do what you need to here
    });

// Remember that your app needs to be initialized with your console config and activated in Firebase console
```

## Sign in with email and password

```javascript
import Firemaker from 'firemaker'

Firemaker('local').signIn('email', 'password')
    .then(() => {
        // Do what you need to here
    })
```

## Sign in with an email link
> This requires you to pass you actionCodeSettings as a third parameter, and also you can leave the second parameter as _

```javascript
import Firemaker from 'firemaker'
const actionCodeSettings = {
        url: 'http://localhost:8080',
        handleCodeInApp: true
    };

// The first parameter is the email to send the link to.
Firemaker('emailLink').signUp('example@mail.com', _, actionCodeSettings);
```
## Get the currently logged in user, if available

```javascript
import Firemaker from 'firemaker'

    // Important to specify your strategy
    Firemaker('local').getUser()
        // Optios can be added in the returned user eg. 1)
        // Returns full user object from Firebase
        .then((user) => console.log(user));
        // Eg 2)
        // Returns user with display name
        .then((user) => console.log(user.displayName));
        // Eg 3)
        // returns the unique id of the user
        .then((user) => console.log(user.uid));
        // Eg 4)
        // Returns the logged in user's email
        .then((user) => console.log(user.email));

// There are other properties available on the object
// Available on Firebase
```
# Enjoy, this package may grow over time to include more methods and options.