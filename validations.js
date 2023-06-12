const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById('myForm');

// form.addEventListener('submit', (event) => {

//   event.preventDefault();

//   if (validateEmail() && validatePassword()) {
//     setTimeout(function() {
//       const container = document.querySelector('div.right');
//       const loader = document.createElement('p');
//       loader.appendChild(document.createTextNode( `Welcome To Multi Shop`) );
//       loader.style.color="green";
//       container.appendChild(loader);
//     }, 1000);
//   }
//   else{
//     setTimeout(function() {
//       const container = document.querySelector('div.right');
//       const loader = document.createElement('p');
//       loader.appendChild(document.createTextNode( `Welcome To Multi Shop`) );
//       loader.style.color="green";
//       container.appendChild(loader);
//     }, 1000);
//   }
// });
function validateuserName(){
    if (checkIfEmpty(userName))return;
    if (!checkIfOnlyLetters(userName)) return;
    return true;
}
function validateEmail() {
    if (checkIfEmpty(email)) return;
    return true;
  }

function validatePassword() {
    // Empty check
    if (checkIfEmpty(password)) return;
    // Must of in certain length
    if (!meetLength(password, 4, 100)) return;

    return true;
  }

function checkIfEmpty(field){
    if (isEmpty(field.value)){
        setInvalid(field, `${field.name} Must Not Be Empty`)
        return true;
    } else{
        setValid(field);
        return false;
    }
}
function isEmpty(value){
    if(value === '')return true;
    return false;
}
function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = "red";

  }
  function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    //field.nextElementSibling.style.color = green;
  }
  function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} must contain only letters`);
      return false;
    }
  }

  function meetLength(field, minLength, maxLength) {
    if (field.value.length >= minLength && field.value.length < maxLength) {
      setValid(field);
      return true;
    } else if (field.value.length < minLength) {
      setInvalid(
        field,
        `${field.name} must be at least ${minLength} characters long`
      );
      return false;
    } else {
      setInvalid(
        field,
        `${field.name} must be shorter than ${maxLength} characters`
      );
      return false;
    }
  }