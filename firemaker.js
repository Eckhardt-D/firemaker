import firebase from 'firebase';

/**
 * @function Firemaker Provides authentication methods
 * @param {Object} config Configuration from Firebase console
 * @param {String} options The authentication method to use
 */
function Firemaker(option) {
    return new Firemaker.init(option);
};

Firemaker.prototype = {

    /**
     * 
     * @param {String} email Always necessary
     * @param {String} password If emailLink used, set to _
     * @param {Object} actionCodeSettings Only required if emailLink option used
     */
    signUp(email, password, actionCodeSettings) {
        return new Promise((resolve, reject) => {
            if (this.option === 'local') {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        console.log('success')
                        resolve('success');
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ...
                        console.error(errorCode, errorMessage);
                    });
            } else if (this.option === 'emailLink') {
                firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
                    .then(function () {
                        // The link was successfully sent. Inform the user.
                        // Save the email locally so you don't need to ask the user for it again
                        // if they open the link on the same device.
                        window.localStorage.setItem('emailForSignIn', email);
                        console.log('sent');
                        return resolve('success');
                    })
                    .catch(function (error) {
                        return reject(error);
                        // Some error occurred, you can inspect the code: error.code
                    });
            } else {
                return reject('No sign up option provided');
            }
        });
    },

    /**
     * 
     * @param {String} email User email address
     * @param {String} password User password
     */
    signIn(email, password) {
        return new Promise((resolve, reject) => {
            if (this.option === 'local') {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(() => {
                        return resolve('success');
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // ...
                        console.error(errorCode.errorMessage);
                        return reject(errorMessage);
                    });
            } else {
                reject('Please provide the local option for signIn');
            }
        });
    },

    /**
     * @method getUser Returns the currently signed in user, if available
     * @param {*} None
     */
    getUser() {
        return new Promise((resolve, reject) => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                  resolve(user);
                } else {
                  // No user is signed in.
                  reject('No user found');
                }
            });
        });
    }
};

Firemaker.init = function (option) {
    const self = this;
    self.option = option;
};

Firemaker.init.prototype = Firemaker.prototype;

export default Firemaker;