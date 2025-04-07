let submitBtn = document.getElementById("submitBtn");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let conError = document.getElementById("conError");

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault
    if(validateName() && validateemail() && validatepassword() && validateconfirm()){
        alert("Form submited successfully")

        document.getElementById("name").value =""
        document.getElementById("email").value =""
        document.getElementById("password").value =""
        document.getElementById("confirm").value =""

        nameError.innerHTML = "";
        nameError.previousElementSibling.classList.remove("fa-xmark", "fa-check")
        emailError.innerHTML = "";
        emailError.previousElementSibling.classList.remove("fa-xmark", "fa-check")
        passError.innerHTML = "";
        passError.previousElementSibling.classList.remove("fa-xmark", "fa-check")
        conError.innerHTML = "";
        conError.previousElementSibling.classList.remove("fa-xmark", "fa-check")

    }
})

function validateName(){
    let name = document.getElementById("name").value 
    if(name.length == 0){
        nameError.innerHTML = "Enter your name"
        nameError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }

    if(!name.match((/^[A-Za-z]*\s{1}[A-Za-z]*$/))){
        nameError.innerHTML = "Enter Full Name"
        nameError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add("fa-check")
return true;
}

function validateemail(){
    let email = document.getElementById("email").value 
    if(email.length == 0){
        emailError.innerHTML = "Email is required"
        emailError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }

    if(!email.match((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))){
        emailError.innerHTML = "Enter a Valid Email"
        emailError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add("fa-check")
return true;
}
function validatepassword(){
    let password = document.getElementById("password").value 
    if(password.length == 0){
        passError.innerHTML = "Enter password"
        passError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML =  "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet"
        passError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }
    passError.innerHTML = "";
    passError.previousElementSibling.classList.add("fa-check")
return true;
}
function validateconfirm(){
    let password = document.getElementById("password").value 
    let confirm = document.getElementById("confirm").value 
    if(confirm.length == 0){
        conError.innerHTML = "Re-enter your password"
        conError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }

    if(password !== confirm){
        conError.innerHTML =  "Password not match"
        conError.previousElementSibling.classList.add("fa-xmark")
    return false;

    }
    conError.innerHTML = "";
    conError.previousElementSibling.classList.add("fa-check")
return true;
}

