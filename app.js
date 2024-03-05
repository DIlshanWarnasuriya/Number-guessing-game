let RandomNumber = Math.round(Math.random() * 20);
console.log(RandomNumber);
document.getElementById("txtNum").value = "";
let body;
let count = 3;

let guess = () => {
    let inputnumber = Number(document.getElementById("txtNum").value);
    let WarningMessage = document.getElementById("WarningMessage");

    if (inputnumber >= 0 && inputnumber <= 20 && inputnumber != "") {
        if (count > 0) {
            if (inputnumber == RandomNumber) {
                WarningMessage.style.visibility = "visible"
                WarningMessage.style.backgroundColor = "#27ae60"
                WarningMessage.innerHTML="Congratulations!. You was guess number correctly";
            }
            else if (inputnumber > RandomNumber) {
                WarningMessage.style.visibility = "visible"
                WarningMessage.style.backgroundColor = "#d35400"
                WarningMessage.innerHTML="Wrong guess! Your Answer is more than Random Number. You have " + --count + " more attempt ";
            }
            else {
                WarningMessage.style.visibility = "visible"
                WarningMessage.style.backgroundColor = "#d35400"
                WarningMessage.innerHTML="Wrong guess! Your Answer is less than Random Number. You have " + --count + " more attempt ";
            }
        }
        else {
            WarningMessage.style.visibility = "visible"
            WarningMessage.style.backgroundColor = "#e74c3c"
            WarningMessage.innerHTML="Your attempts are over";
        }
    }
    else {
        WarningMessage.style.visibility = "visible" 
        WarningMessage.style.backgroundColor = "#e74c3c"
        WarningMessage.innerHTML="Please enter between 0 to 20 number";
    }   
}

