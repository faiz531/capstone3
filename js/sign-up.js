

document


.getElementById("signupForm")
.addEventListener("submit",function(event){
    event.preventDefault();

let userEmail=document.getElementById('signupmail').value
let userPassword =document.getElementById('signUppassword').value

console.log(userEmail,userPassword);

if(userEmail && userPassword){
    localStorage.setItem('Email',userEmail )
    localStorage.setItem('Password', userPassword)

window.location.href ="../sign in/sign-in.html"
}
});

