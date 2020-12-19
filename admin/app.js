const cafeList = document.querySelector('#cafe-list');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let phone = document.createElement('span');
    let date = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
     phone.textContent = doc.data().phone;
     date.textContent = doc.data().date;
    

    li.appendChild(name);
    li.appendChild(email);
     li.appendChild(phone);
    li.appendChild(date);

    cafeList.appendChild(li);
}

// getting data
db.collection('users').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
