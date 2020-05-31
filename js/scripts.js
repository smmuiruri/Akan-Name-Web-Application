
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

 
