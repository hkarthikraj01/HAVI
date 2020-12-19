// DOM elements
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC-pKtCM2VQKsxnO0zCU0m7OdNj7W0Zr7c",
    authDomain: "authfirebase-2533f.firebaseapp.com",
    databaseURL: "https://authfirebase-2533f.firebaseio.com",
    projectId: "authfirebase-2533f"
    };
    firebase.initializeApp(config);
    
    // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();

    // update firestore settings
    db.settings({ timestampsInSnapshots: true });
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const pname = document.querySelector('.p-name');


const setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then(doc => {
      const html = `
        <!--div>Logged in as ${user.email}</div-->
        <div>NAME  : ${doc.data().name}</div>
        <div>EMAIL : ${doc.data().email}</div>
        <div>Ph.No : ${doc.data().phone}</div>
        <div>DOB   : ${doc.data().date}</div>
      `;
      accountDetails.innerHTML = html;
      const s = `
        <div>${doc.data().name}</div>
      `;
      pname.innerHTML = s;
    });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

// setup guides
const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
  

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
