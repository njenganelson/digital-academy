//alert("Ready for JS")
var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function validate() {
    var genders = document.getElementsByName("gender")
    year = document.getElementById("year").value
    month = parseInt(document.getElementById("month").value)
    day = parseInt(document.getElementById("date").value)
    if (year == null || year == undefined || year == "" || year > 2022) {
        alert("Enter valid year")
    }
    else if (month == null || month == undefined || month == "" || month <= 0 || month > 12) {
        alert("Enter valid month")
    }
    else if (day == null || day == undefined || day == "" || day < 0 || day > 31) {
        alert("Enter valid day")
    }
    else if (genders[0].checked == false && genders[1].checked == false) {
        alert("Select Gender")
    }
    else
        return true
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
    return (Math.floor(d))
    //dayOfWeek = (Math.floor(d))
    //console.log(dayOfWeek)
}


function getGender() {
    var genders = document.getElementsByName("gender")
    if (genders[0].checked == true) {
        var gender = "male"
    }
    else if (genders[1].checked == true) {
        var gender = "female"
    }
    else {
        return false
    }
    switch (gender) {
        case "male":
            if (dayValue == 1) {
                alert("Your akan name is " + maleNames[0] + "!")
            }
            else if (dayValue == 2) {
                alert("Your akan name is " + maleNames[1] + "!")
            }
            else if (dayValue == 3) {
                alert("Your akan name is " + maleNames[2] + "!")
            }
            else if (dayValue == 4) {
                alert("Your akan name is " + maleNames[3] + "!")
            }
            else if (dayValue == 5) {
                alert("Your akan name is " + maleNames[4] + "!")
            }
            else if (dayValue == 6) {
                alert("Your akan name is " + maleNames[5] + "!")
            }
            else if (dayValue == 0) {
                alert("Your akan name is " + maleNames[6] + "!")
            }
            break;
        case "female":
            if (dayValue == 1) {
                alert("Your akan name is  " + femaleNames[0] + "!")
            }
            else if (dayValue == 2) {
                alert("Your akan name is " + femaleNames[1] + "!")
            }
            else if (dayValue == 3) {
                alert("Your akan name is " + femaleNames[2] + "!")
            }
            else if (dayValue == 4) {
                alert("Your akan name is " + femaleNames[3] + "!")
            }
            else if (dayValue == 5) {
                alert("Your akan name is " + femaleNames[4] + "!")
            }
            else if (dayValue == 6) {
                alert("Your akan name is " + femaleNames[5] + "!");
            }
            else if (dayValue == 0) {
                alert("Your akan name is " + femaleNames[6] + "!")
            }
            break
        default:
    }
}

function getAkanName() {
    dayValue = getDay()
    getGender()
}

var getNameBtn = document.getElementById("getName")
getNameBtn.addEventListener("click", function (event) {
    validate()
    if (validate() == true) {
        getAkanName()
    }
})