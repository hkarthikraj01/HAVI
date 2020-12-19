 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   var firebaseConfig = {
    apiKey: "AIzaSyA-REIZa2l9qWOaHKXmRhHdnw4g3RYy-VQ",
    authDomain: "contact-form-73a33.firebaseapp.com",
    databaseURL: "https://contact-form-73a33.firebaseio.com",
    projectId: "contact-form-73a33",
    storageBucket: "contact-form-73a33.appspot.com",
    messagingSenderId: "560391989288",
    appId: "1:560391989288:web:5a8059fba3efd0c1c6ad1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
 // firebase.analytics();

  // Reference messages collection
  var messagesRef = firebase.database().ref('quote');
  
  // Listen for form submit
  document.getElementById('signup-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
    var full_name = getInputVal('full_name');
    var phone = getInputVal('phone');
    var your_email = getInputVal('your_email');
    var date = getInputVal('date');
    
  
    // Save message
    saveMessage(full_name, phone, your_email,  date);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('signup-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(full_name, phone, your_email,  date){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      full_name: full_name,
      phone:phone,
      your_email:your_email,
      date:date
    });
  }
