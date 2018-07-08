# Firemaker 

## A module that simplifies the usage of Firebase's email and password login as well as the email link method.

#### This package is optimized for use in Vue.js environment

```console
npm install firebase --save
npm install firemaker --save
```

## To use it in your application, you need to initialize your app with firebase

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

Firemaker('emailLink').signUp('emailtosendto', _, actionCodeSettings);
```

# Enjoy, this package may grow over time to include more method and options