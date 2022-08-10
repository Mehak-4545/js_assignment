// function validate() {

//     var user = document.getElementById("e").value;
//     var user2 = document.getElementById("e");
//     console.log(user2);
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (re.test(user)) {
//         alert("done");
//         return true;
//     } else {
//         user2.style.border = "red solid 3px";
//         return false;
//     }
// }


function ValidateNumber() {
    let myphone1 = document.getElementById("phone").value;
    let myphone2 = myphone1.trim();

    if (myphone2.length == 0) {
        document.getElementById(validate_phone).innerHTML = "Please enter your phone number";
        return false;
    }


    if (!myphone2.match(/^((\+91)?|(0{1,2})|(91))\s*-?\s*[0-9]{10}/)) {
        document.getElementById(validate_phone).innerHTML = "Invalid Phone Number";
        return false;
    }

    document.getElementById(validate_phone).innerHTML = "Valid number";
    return true;

}

function ValidateMail() {
    let mymail1 = document.getElementById("mail").value;
    let mymail2 = mymail1.trim();

    if (mymail2.length == 0) {
        document.getElementById(validate_mail).innerHTML = "Please enter your E-mail Address";
        return false;
    }

    if (!mymail2.match(/^((\+91)?|(0{1,2})|(91))\s*-?\s*[0-9]{10}/)) {
        document.getElementById(validate_mail).innerHTML = "Invalid E-mail Address";
        return false;
    }

    document.getElementById(validate_mail).innerHTML = "Valid E-mail Address";
    return true;
}