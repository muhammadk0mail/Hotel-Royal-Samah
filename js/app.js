function login(){
    var model = {}
    model.email = document.getElementById('email').value
    model.password = document.getElementById('password').value


    firebase.auth().signInWithEmailAndPassword(model.email,model.password)
    .then(function(success){
        // console.log(success)
        window.location.replace("../admin/pages/index.html");

    })
    .catch(function(err){
        alert(err.message)
    })

}
function home(){
    window.location.replace("../index.html");
}


function message(){
    var msg = []
    msg.firstName = document.getElementById('firstName').value
    msg.lastName = document.getElementById('lastName').value
    msg.email = document.getElementById('email').value
    msg.telephoneNumber = document.getElementById('telephoneNumber').value
    msg.country = document.getElementById('country').value
    msg.msg = document.getElementById('msg').value

    if(msg.firstName != "" && msg.lastName != "" && msg.email != "" && msg.telephoneNumber != "" && msg.country != "" && msg.msg != ""){
    firebase.database().ref('/').child('Data Of msg').push(msg)
    console.log(msg);
     
    firstName.value = "" 
    lastName.value = "" 
    email.value = "" 
    telephoneNumber.value = "" 
    country.value = "" 
    msg.value = ""
}
else{
    alert('please insert Values')
}
}