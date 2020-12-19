 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC-pKtCM2VQKsxnO0zCU0m7OdNj7W0Zr7c",
    authDomain: "authfirebase-2533f.firebaseapp.com",
    databaseURL: "https://authfirebase-2533f.firebaseio.com",
    projectId: "authfirebase-2533f",
    storageBucket: "authfirebase-2533f.appspot.com",
    messagingSenderId: "537279639100",
    appId: "1:537279639100:web:8ed5796c0f784074a2dd39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
 // firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('book');
  
  // Listen for form submit
  document.getElementById('signup-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
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
    },2000);
    
    //window.open('bookingSuccess.html', '_blank');
  
    // Clear form
   // document.getElementById('bookingForm').reset();
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
