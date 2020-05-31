
var DD,MM,YY,CC,dayNumber;
function getInput(){
    MM = parseInt((document.getElementById("month")||{}).value)||"";
    DD = parseInt((document.getElementById("day")||{}).value)||"";
    YY = parseInt((document.getElementById("year")||{}).value)||"";
    CC = parseInt((document.getElementById("century")||{}).value)||"";
    if(CC <=0 || CC >30){
        alert("Fill in the correct century");
      }else if (YY <0 || YY >100){
        alert("Fill in the correct year");
      }else if (MM <=0 || MM>12){
        alert("Month should be between 1 to 12");
      }else if(DD <=0 || DD >31){
        alert("Date of month should be between 1 and 31");
      }
}
function getDay() {
    getInput();    
    let results = ((parseInt(CC / 4) - 2 * CC - 1) + (parseInt(5 * YY / 4)) + (parseInt(26 * (MM + 1) / 10)) + DD) % 7;
    return results
  }

let malenames = ["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femalenames = ["Akosua","Adwoa", "Abenaa","Akua","Yaa", "Afua","Ama" ]

function theName(){
  genderConfirm();
  dayNumber = getDay();
  console.log();  
}
function genderConfirm(){
    var gender = document.getElementsByName("select")
    if (gender[0].checked == true){
        var sex = "male";
    }else if (gender[1].checked == true){
        var sex = "female";
    }
switch(sex){
   case sex = "male":
       switch(dayNumber){
           case (0):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[0];
           break;
           case (1):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[1];
           break;
           case (2):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[2];
           break;
           case (3):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[3];         
           break;
           case (4):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[4];
           break;
           case (5):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[5];
           break;
           case (6):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + malenames[6];              
           break;
          }
    case sex = "female":
        switch(dayNumber){
           case (0):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[0];
           break;
           case (1):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[1];
           break;
           case (2):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[2];
           break;
           case (3):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[3];         
           break;
           case (4):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[4];
           break;
           case (5):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[5];
           break;
           case (6):
           document.getElementById("SUBMIT").innerHTML = "Your Akan Name is " + femalenames[6];            
           break;
        } 
}
}

 
