
var DD,MM,YY,CC;
function getInput(){
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("day").value);
    YY = parseInt(document.getElementById("year").value);
    CC = parseInt(document.getElementById("century").value);
    // var calculations = "true"
}
function getDay() {
    getInput();
    calculations = ((parseInt(CC / 4) - 2 * CC - 1) + (parseInt(5 * YY / 4)) + (parseInt(26 * (MM + 1) / 10)) + DD) % 7;
    return calculations;
}
console.log(getDay());

let malenames = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalenames = ["Akosua","Adwoa", "Abenaa","Akua","Yaa", "Afua","Ama" ]
let day = getday();
function genderConfirm(){
    var gender = document.getElementsByName("radio")
    if (gender[0].checked == "true"){
        var sex = male;
    }else if (gender[1].checked == "true"){
        var sex = female;
    }else{
        console.log("pass")        
    }
switch(sex){
   case sex = "male":
       switch(day){
           case (0):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[0];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[0];
           case (1):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[1];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[1];
           case (2):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[2];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[2];
           case (3):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[3];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[3];         
           case (4):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[4];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[4];
           case (5):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[5];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[5];
           case (6):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[6];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[6];              
        }
    case sex = "female":
        switch(day){
           case (0):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[0];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[0];
           case (1):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[1];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[1];
           case (2):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[2];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[2];
           case (3):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[3];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[3];         
           case (4):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[4];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[4];
           case (5):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[5];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[5];
           case (6):
           document.getElementById("result").innerHTML = "Your Akan Name is" + malenames[6];
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is" + malenames[6];            

        } 
}
}

 
