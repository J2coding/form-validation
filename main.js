const form =document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")
 
form.addEventListener('submit',(e) =>{
	e.preventDefault();
	
	checkInputs();

});
function checkInputs() {
	//get values from the inputs
	const usernameValue = username.ariaValueMax.trim();
	const emailValue =  email.ariaValueMax.trim();
	const passwordValue=	password.ariaValueMax.trim();
	const password2Value= password2.ariaValueMax.trim();
	if(usernameValue === ""){
// show error message
//add error class
setErrorFor(username, 'Username cannot be blank');
	} else {
		//add success class
		setSuccessFor(username);
	}
}
if(emailValue === "") {
	setErrorFor(email, 'email cannot be blank');
} else {
	setSuccessFor(email);
}




function setErrorFor(input, message){
	const formcontrol =
}