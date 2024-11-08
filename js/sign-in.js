document
.getElementById("signinForm")
.addEventListener('submit',function(event){
    event.preventDefault();
     

    let localEmail = localStorage.getItem('Email');
let localpassword = localStorage.getItem('Password');

     let userEmail = document.getElementById('signupmail').value
let userPassword = document.getElementById('signUppassword').value

// console.log(localEmail,localpassword);
if(userEmail === localEmail && userPassword === localpassword){
    window.location.href="../../index.html"
} else{
    alert("some thing wrong!")

}

});

