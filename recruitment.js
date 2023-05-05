const firebaseConfig = {
    apiKey: "AIzaSyDFv6_a7b7XwZHndJjWAH6nSEcepdt_YkE",
    authDomain: "newrecruitmentform.firebaseapp.com",
    databaseURL: "https://newrecruitmentform-default-rtdb.firebaseio.com",
    projectId: "newrecruitmentform",
    storageBucket: "newrecruitmentform.appspot.com",
    messagingSenderId: "200358306546",
    appId: "1:200358306546:web:0a24d898f10fe5dd1de66b",
};
firebase.initializeApp(firebaseConfig);
 var RecruitmentFormDB = firebase.database().ref('recruitment form');
  document.getElementById('recruitmentform').addEventListener('submit', submitform);
  function submitform(e){
    e.preventDefault();
  }
  var name = getElementVal("name");
  var email= getElementVal("email");
  var Contact = getElementVal("number");
  var department= getElementVal("cse");
  var department= getElementVal("etce");

 var department= getElementVal("it");
 var department= getElementVal("EE");
 var department= getElementVal("iee");
 var department= getElementVal("me");
 var department= getElementVal("Che");
 var department= getElementVal("mme");
 var department= getElementVal("ce");
 var department= getElementVal("power");
 var department= getElementVal("prod");
 var department= getElementVal("Construction");
 var department= getElementVal("print");
 var department= getElementVal("ftbe");

 var year= getElementVal("Ug1");
 var year= getElementVal("Ug2");
 var year= getElementVal("Ug3");
 var year= getElementVal("Ug4");
 saveMessages ( name ,  email, contact, department, year);

 document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("recruitmentForm").reset();
  const saveMessages = (name, email, department, year) => {
    var newrecruitmentForm = recruitmentFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: email,
      department: department,
      year: year,
      
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
 
