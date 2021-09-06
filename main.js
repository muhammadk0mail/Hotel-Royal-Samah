function message(){
    var msg = []
    msg.fName = document.getElementById('fName').value
    msg.lName = document.getElementById('lName').value
    msg.e_mail = document.getElementById('e_mail').value
    msg.tNumber = document.getElementById('tNumber').value
    msg.counTry = document.getElementById('counTry').value
    msg.Msg = document.getElementById('Msg').value
    firebase.database().ref('/').child('Data Of msg').push(msg)
    console.log(msg);
    // window.location.replace("contact.html");
  }