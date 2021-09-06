document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    myModal.show();
  }
})


var cI = document.getElementById('checkIn');
var cO = document.getElementById('checkOut');

function checkAvailability() {
  cO.min = cI.min;
}

// ------------------------------------------------------------------------


var model = {}


function register1() {

  model.checkIn = document.getElementById('checkIn').value
  model.checkout = document.getElementById('checkOut').value
  model.adult = document.getElementById('adult').value
  model.children = document.getElementById('children').value

    firebase.database().ref('/').child('step 1 Data').push(model)
    updateFormSteps();
}

firebase.database().ref('/').child('step 1 Data').on('child_added', function (data) {
  (data.val())

  var displaycI = document.getElementById('cI');
  var displaycO = document.getElementById('cO');
  var displayaD = document.getElementById('aD');
  var displaycI2 = document.getElementById('cI2');
  var displaycO2 = document.getElementById('cO2');
  var displayaD2 = document.getElementById('aD2');

  displaycI.innerHTML = model.checkIn
  displaycO.innerHTML = model.checkout
  displayaD.innerHTML = model.adult
  displaycI2.innerHTML = model.checkIn
  displaycO2.innerHTML = model.checkout
  displayaD2.innerHTML = model.adult
})


function register2_1() {

  model.Room = "MASTER TWIN"
  model.Price = 4500
  updateFormSteps();
  firebase.database().ref('/').child('step 2 Data').push(model)
}

function register2_2() {

  model.Room = "EXECUTIVE"
  model.Price = 4000
  updateFormSteps();
  firebase.database().ref('/').child('step 2 Data').push(model)
}

function register2_3() {

  model.Room = "STANDARD"
  model.Price = 3500
  updateFormSteps();
  firebase.database().ref('/').child('step 2 Data').push(model)
}

function register2_4() {

  model.Room = "VIP"
  model.Price = 5000
  updateFormSteps();
  firebase.database().ref('/').child('step 2 Data').push(model)
}

firebase.database().ref('/').child('step 2 Data').on('child_added', function (data) {
  (data.val())

  var displayRoom = document.getElementById('r');
  var displayprice = document.getElementById('p');

  displayRoom.innerHTML = model.Room
  displayprice.innerHTML = model.Price
})


function register3() {

  model.firstName = document.getElementById('firstName').value
  model.lastName = document.getElementById('lastName').value
  model.email = document.getElementById('email').value
  model.telephoneNumber = document.getElementById('telephoneNumber').value
  model.cellnumber = document.getElementById('cellnumber').value
  model.addressLine = document.getElementById('addressLine').value
  model.cnicOrPassportno = document.getElementById('cnicOrPassportno').value
  model.city = document.getElementById('city').value
  model.state = document.getElementById('state').value
  model.zipOrPostal = document.getElementById('zipOrPostal').value
  model.country = document.getElementById('country').value
  model.SpecialRequirementsFlightInfo = document.getElementById('SpecialRequirementsFlightInfo').value

  if(model.firstName != "" && model.lastName != "" && model.email != "" && model.telephoneNumber != "" && model.cellnumber != "" && model.addressLine != "" && model.cnicOrPassportno != "" && model.city != "" && model.state != "" && model.cnicOrPassportno != "" && model.zipOrPostal != "" && model.country != ""){
  firebase.database().ref('/').child('Data Of CUSTOMER').push(model)
  console.log(model);
  doneAndReturnToStart();
  }
  else{
    alert("Please Insert a value")
  }

}

function doneAndReturnToStart() {
  alert('Thank you For Booking In Our Hotel');
  window.location.replace("booking.html");

}

// BOOKING FOAM
// --------------------------FOR FOAM STEPS-------------------------------------

const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
let formStepsNum = 0;



function updateFormSteps() {

  if(model.checkIn != "" && model.checkout != "" && model.adult != "" && model.children != ""  ){
    formStepsNum++;
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
    formSteps[formStepsNum].classList.add("form-step-active");
    console.log(formStepsNum);
    
  }
  else{
    alert("Please Insert a value")
  }
}










function editReservation() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  formSteps[0].classList.add("form-step-active");
  formStepsNum = 0;
}

function fillDate() {
  console.log(cI.value)
  cO.min = cI.value
}




function message() {
  var msg = []
  msg.firstName = document.getElementById('firstName').value
  msg.lastName = document.getElementById('lastName').value
  msg.email = document.getElementById('email').value
  msg.telephoneNumber = document.getElementById('telephoneNumber').value
  msg.country = document.getElementById('country').value
  msg.msg = document.getElementById('msg').value
  firebase.database().ref('/').child('Data Of msg').push(msg)
  console.log(msg);
  window.location.replace("contact.html");
}

function fillTodayDate() {
  var todayDate = new Date()
  var year = todayDate.getFullYear()
  var month = todayDate.getMonth() < 10 ? "0" + todayDate.getMonth() : (todayDate.getMonth())
  var dt = todayDate.getDate() < 10 ? "0" + todayDate.getDate() : todayDate.getDate()
  // month
  // console.log();
  if(month < 10){
  "0"+(++month)
  }
  else{
    ++month
  }

  cI.min = year + '-' + "0"+month + '-' + dt
}
fillTodayDate()

