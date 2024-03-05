let RandomNumber = Math.round(Math.random() * 20);
document.getElementById("txtNum").value = "";
let body;
let count = 3;

let submit = () => {
    let inputnumber = Number(document.getElementById("txtNum").value);

    if (inputnumber >= 0 && inputnumber <= 20 && inputnumber != "") {
        if (count > 0) {
            if (inputnumber == RandomNumber) {
                body = `<h3>Congratulations!. You was guess number correctly</h3>`;
                document.getElementById("result").innerHTML = body;
            }
            else if (inputnumber > RandomNumber) {
                body = `<h3> Wrong guess! Your Answer is more than Random Number. You have ${--count} more attempt </h3>`;
                document.getElementById("result").innerHTML = body;
            }
            else {
                body = `<h3> Wrong guess! Your Answer is less than Random Number. You have ${--count} more attempt</h3>`;
                document.getElementById("result").innerHTML = body;
            }
        }
        else {
            body = `<h3>Your attempts are over</h3>`;
            document.getElementById("result").innerHTML = body;
        }
    }
    else {
        body = `<h3>Please enter between 0 to 20 number</h3>`;
        document.getElementById("result").innerHTML = body;
    }

}

