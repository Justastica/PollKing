//firebase config  YOU NEED THIS AT THE TOP OF YOUR JS FILES
var config = {
    apiKey: "AIzaSyCCnyG7ZergtrhXZw66KNK_OIzRyFmfk_k",
    authDomain: "pollkingnpss.firebaseapp.com",
    databaseURL: "https://pollkingnpss.firebaseio.com",
    projectId: "pollkingnpss",
    storageBucket: "pollkingnpss.appspot.com",
    messagingSenderId: "418230449983"
};

// Initialize your Firebase app YOU NEED THIS TO INITIALIZE FIREBASE
firebase.initializeApp(config);

// Reference to your entire Firebase database YOU NEED THIS
var myFirebase = firebase.database().ref();

// This will create this object for us!
var poll = myFirebase.child("polls");

// push data to a string. 
poll.push({
    "Chocolate": 0,
    "vanilla": 0,
    "Strawberry": 0,
    "Mint":0
});
