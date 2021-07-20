const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

function validate() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue =="" && passwordValue =="") {
        setErrorFor(username, 'User not found');
        setErrorFor(password, 'Password is incorrect');
        return false;
    } 
    
    if(usernameValue != "admin" && passwordValue != "12345") {
        setErrorFor(username, 'User not found');
        setErrorFor(password, 'Password is incorrect');
        return false;
    } 
    
    if(usernameValue == "admin" && passwordValue == "12345") {
        setSuccessFor(username);
        setSuccessFor(password);
        return true;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        small.innerText = message;

        formControl.className = 'form-control error';
      }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
}
