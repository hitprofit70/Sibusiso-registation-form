
var form = document.getElementById('form');
var fname = document.getElementById('fname');
var surname = document.getElementById('surname');
var eAddress = document.getElementById('eAddress');
var password = document.getElementById('password');
var cpassword = document.getElementById('cpassword');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    displayInputs();
});


function displayInputs() {
    var fnameValue = fname.value.trim();
    var surnameValue = surname.value.trim();
    var eAddressValue = eAddress.value.trim();
    var passwordValue = password.value.trim();
    var cpasswordValue = cpassword.value.trim();

    if(fnameValue === '') {
        setErrorFor(fname, 'First Name cannot be blank');
    } else {
         setSuccessFor(fname)
    }
}

function setErrorFor(input, message) {}

// function displayOnscreen() {
    
// }
// displayOnscreen();