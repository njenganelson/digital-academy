//alert("Ready for JS")
var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function validate() {

}
function getDay() {
    /*CC = 20
    YY = 21
    MM = 12
    DD = 25*/
    year = document.getElementById("year").value
    CC = parseInt(year.substring(0, 2))
    YY = parseInt(year.substring(2, 4))
    MM = parseInt(document.getElementById("month").value)
    DD = parseInt(document.getElementById("date").value)
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    console.log(d)
    dayOfWeek = Math.floor(d)
    console.log(dayOfWeek)
}
function getAkanName() {
    dayValue = calculateDayValue()
    getGender()
}
getAkanName()

function getGender() {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "male";
    }
    else if (genders[1].checked == true) {
        var gender = "female";
    }
    else {
        return false;
    }
    
}