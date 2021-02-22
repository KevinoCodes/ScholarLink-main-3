

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCzpAE7z-t-qbIVeXKSjYa03rn8paL0gfM",
  authDomain: "scholarlink-fbc6d.firebaseapp.com",
  databaseURL: "https://scholarlink-fbc6d-default-rtdb.firebaseio.com",
  projectId: "scholarlink-fbc6d",
  storageBucket: "scholarlink-fbc6d.appspot.com",
  messagingSenderId: "779840711821",
  appId: "1:779840711821:web:d614b88d7b09d9c81846c4",
  measurementId: "G-RP9HPMQX27"

};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('Tutors');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // get Values
  let name = getInputVal('name');
  let description = getInputVal('description');
  let email = getInputVal('email');
  let subject = getInputVal('subject');
  let grade  = getInputVal('grade');
  let city = getInputVal('city');
  let province = getInputVal('province');
  //save message

  saveMessage(name, description, email, subject, grade, city, province);

  //Hide alert after 3 s
  setTimeout(function(){
      document.querySelector('signupmessage').style.display='none';
  }, 3000)
  //clear form
  document.getElementById('contactForm').reset();
  
}
//function to get form values

function getInputVal(id){
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, description, email, subject, grade, city, province){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
      name: name,
      description: description,
      email: email,
      subject: subject,
      grade: grade,
      city: city,
      province: province,
  })
}


const database = firebase.database();
const rootRef = database.ref('Tutors');
rootRef.orderByKey().on('value', data => {
  console.log(data.val());
  var tutorforms = document.querySelectorAll('.tutorinfo');
  for (var i = 0; i < tutorforms.length; i++) {
    tutorforms[i].remove();
  }
  var tutor = data.val();
  var keys = Object.keys(tutor)
  console.log(keys)
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = tutor[k].name
    var email = tutor[k].email
    var subject = tutor[k].subject
    var province = tutor[k].province
    var description = tutor[k].description
    var grade = tutor[k].grade
    var city = tutor[k].city
    console.log(name, email, subject, province, description, grade, city);
    //create display in table
    var a = document.createElement('tr')
    // a.classList.add('card')
    // title was result.stuff[i].title
    a.innerHTML = ` 
    <tr>
      <td>${name}</td>
      <td>${description}</td>
      <td>${email}</td>
      <td><a1>${province}<a1></td>
      <td><a>${subject}</a></td>
      <td><a2>${grade}<a2></td>
    </tr>

    `
    document.getElementById('tutorformbody').appendChild(a)
    a.classList.add('tutorinfo');
    }
    }
)

function sortprovince() {

        // Declare variables
        var provinceinput, table, tr, td, i, txtValueprovince;
        provinceinput = document.getElementById("province").value;
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
    
        console.log(provinceinput)
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("a1")[0];
        if (td) {
            txtValueprovince = td.textContent || td.innerText;
            console.log(txtValueprovince)
            if (txtValueprovince.indexOf(provinceinput) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }
        }

}

function sortsubject() {

        // Declare variables
        var subjectinput, table, tr, td, i, txtValue;
        subjectinput = document.getElementById("subject").value;
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
    
        console.log(subjectinput)
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("a")[0];
        if (td) {
            txtValuetutor = td.textContent || td.innerText;
            console.log(txtValuetutor)
            if (txtValuetutor.indexOf(subjectinput) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }
        }

}

function sortgrade() {

    // Declare variables
    var gradeinput, table, tr, td, i, txtValue;
    gradeinput = document.getElementById("grade").value;
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    console.log(gradeinput)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("a2")[0];
    if (td) {
        txtValuetutor = td.textContent || td.innerText;
        console.log(txtValuetutor)
        if (txtValuetutor.indexOf(gradeinput) > -1) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
    }
    }

}