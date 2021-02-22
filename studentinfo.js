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
  let messagesRef = firebase.database().ref('Students');
  
  //listen to form
  document.getElementById('contactForm1').addEventListener('submit', submitForm1);


  function submitForm1(e){
    e.preventDefault();
  
    // get Values
    let name1 = getInputVal1('name1');
    let description1 = getInputVal1('description1');
    let email1 = getInputVal1('email1');
    let subject1 = getInputVal1('subject1');
    let grade1  = getInputVal1('grade1');
    let city1 = getInputVal1('city1');
    let province1 = getInputVal1('province1');

  
    //save message
  
    saveMessage1(name1, description1, email1, subject1, grade1, city1, province1);
  
    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm1').reset();
  }
  //function to get form values
  
  function getInputVal1(id){
    return document.getElementById(id).value;
  }
  
  //save message to firebase
  function saveMessage1(name1, description1, email1, subject1, grade1, city1, province1){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name1,
        description: description1,
        email: email1,
        subject: subject1,
        grade: grade1,
        city: city1,
        province: province1,
    })
  }


const database = firebase.database();
const rootRef = database.ref('Students');
rootRef.orderByKey().on('value', data => {
  console.log(data.val());
  var studentforms = document.querySelectorAll('.studentinfo');
  for (var i = 0; i < studentforms.length; i++) {
    studentforms[i].remove();
  }
  var student = data.val();
  var keys = Object.keys(student)
  console.log(keys)
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name1 = student[k].name
    var email1 = student[k].email
    var subject1 = student[k].subject
    var province1 = student[k].province
    var description1 = student[k].description
    var grade1 = student[k].grade
    var city1 = student[k].city
    console.log(name1, email1, subject1, province1, description1, grade1, city1);
    //create display in table
    var a = document.createElement('tr')
    // a.classList.add('card')
    // title was result.stuff[i].title
    a.innerHTML = ` 

    <tr>
      <td><a href="mystudents.html"><u>${name1}<u></a></td>
      <td>${description1}</td>
      <td>${email1}</td>
      <td><a1>${province1}<a1></td>
      <td><a3>${subject1}</a></td>
      <td><a2>${grade1}<a2></td>
    </tr>

    `
    
    document.getElementById('studentformbody').appendChild(a)
    a.classList.add('studentinfo');
    
    }
    }
)

function sortprovince1() {

        // Declare variables
        var provinceinput, table, tr, td, i, txtValueprovince;
        provinceinput = document.getElementById("province").value;
        table = document.getElementById("dataTable1");
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

function sortsubject1() {

        // Declare variables
        var subjectinput, table, tr, td, i, txtValue;
        subjectinput = document.getElementById("subject").value;
        table = document.getElementById("dataTable1");
        tr = table.getElementsByTagName("tr");
    
        console.log(subjectinput)
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("a3")[0];
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

function sortgrade1() {

    // Declare variables
    var gradeinput, table, tr, td, i, txtValue;
    gradeinput = document.getElementById("grade").value;
    table = document.getElementById("dataTable1");
    tr = table.getElementsByTagName("tr");

    console.log(studentsthismonth1)

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





