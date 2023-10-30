function validatePhone() {
    var phoneNumber = document.getElementById('phone-field').value;

    var phonePattern = /^\d{10}$/;

    if (phonePattern.test(phoneNumber)) {
        var temp = document.getElementById('message-phone');
        temp.textContent = 'Phone number is valid.'
        temp.style.color = 'green';
        return true;
    } else {
        var temp = document.getElementById('message-phone');
        temp.textContent = 'Invalid phone number. Please enter a 10-digit number.'
        temp.style.color = 'red';
        return false;
    }
}
function validatePassword() {
    var pwd = document.getElementById('password-field').value;
    if (pwd.length == 0) {
        var temp = document.getElementById('message-password');
        temp.textContent = 'password cannot be empty.'
        temp.style.color = 'red';
        return false;
    } else {
        return true;
    }

}

function validateLogin() {
    setTimeout(function () {
        var temp = document.getElementById('message-phone');
        if (temp) {
            temp.textContent = '';
        }
    }, 1500);
}


document.getElementById('login-form').addEventListener('submit', function (event) {
    if (!validatePhone() || !validatePassword()) {
        event.preventDefault();
    }

});


const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get("error");

if (error) {
    document.getElementById("error-message").innerText = error;
}