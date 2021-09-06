var dataParent = document.getElementById('data')
var arr = []

function getData(){

    
    firebase.database().ref('/').child('Data Of CUSTOMER').on('child_added', function (data) {
        arr.push(data.val())
        dataParent.innerHTML= ''
        for(var i=0; i<arr.length; i++){    
            dataParent.innerHTML += ` <tr>
            <td>${arr[i].firstName +' '+arr[i].lastName}</td>
            <td>${arr[i].telephoneNumber}</td>
            <td>${arr[i].cellnumber}</td>
            <td>${arr[i].cnicOrPassportno}</td>
            <td>${arr[i].country}</td>
            <td>${arr[i].SpecialRequirementsFlightInfo}</td>
            <td>${arr[i].Room}</td>
            <td>${arr[i].checkIn}</td>
            <td>${arr[i].adult}</td>
            <td>${arr[i].Price}</td>
            
          </tr>`
        }
    })
    console.log(arr)
}
getData()

var dataOfMessage = document.getElementById('dataOfMessage')
var arr2 = []

function getDataOfMsg(){
    firebase.database().ref('/').child('Data Of msg').on('child_added', function (data2) {
        arr2.push(data2.val())
        dataOfMessage.innerHTML= ''
        for(var i=0; i<arr2.length; i++){    
            dataOfMessage.innerHTML += ` <tr>
            <td>${arr2[i].firstName +' '+arr2[i].lastName}</td>
            <td>${arr2[i].email}</td>
            <td>${arr2[i].telephoneNumber}</td>
            <td>${arr2[i].country}</td>
            <td>${arr2[i].msg}</td>            
          </tr>`
        }
    })
    console.log(arr2)
}
getDataOfMsg()

function logout(){
    window.location.replace("../login.html");
}