// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCfIUvPRDm9g8Mj76WSgQ1PEhOVW-gnhn0",
  authDomain: "charmaine-s-portfolio.firebaseapp.com",
  databaseURL: "https://charmaine-s-portfolio.firebaseio.com",
  projectId: "charmaine-s-portfolio",
  storageBucket: "charmaine-s-portfolio.appspot.com",
  messagingSenderId: "1098722026359",
  appId: "1:1098722026359:web:b6b1f44cc3205b02d03772",
  measurementId: "G-HBK9RB8G0W"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var subject = getInputVal('subject');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, subject, email, phone, message);


  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, subject, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      subject: subject,
      email: email,
      phone: phone,
      message: message
    });
  }
}