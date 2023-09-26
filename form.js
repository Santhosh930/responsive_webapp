// Male female toogle buttom

document.addEventListener("DOMContentLoaded", function () {
  const maleButton = document.getElementById("male");
  const femaleButton = document.getElementById("female");

  maleButton.addEventListener("click", function () {
    maleButton.classList.add("btn-primary");
    femaleButton.classList.remove("btn-primary");
  });

  femaleButton.addEventListener("click", function () {
    femaleButton.classList.add("btn-primary");
    maleButton.classList.remove("btn-primary");

  });
});

//             validating the form
function validation() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var age = document.getElementById("age").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("dateTimePicker").value;
  // console.log(date);
  var pass = document.getElementById("pass").value;
  var passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  var city = document.getElementById("location").value;
  var checkbox = document.getElementById("terms");
  var nameValidation = document.querySelector('.name-validate');
  var emailValidation = document.querySelector('.email-validate');
  var ageValidation = document.querySelector('.age-validate');
  var phoneValidation = document.querySelector('.phone-validate');
  var dateValidation = document.querySelector('.date-validate');
  var passwordValidation = document.querySelector('.password-validate');
  var locationValidation = document.querySelector('.location-validate');

  // converting the string into date 
  const enteredDate = new Date(date);

  // Get the current date and time
  const currentDate = new Date();

  if (name == "" || !isNaN(name) || name.length < 3) {
    nameValidation.classList.add('is-invalid');
    document.form.name.value = "";
    document.form.name.focus();
    return false;
  } else {
    nameValidation.classList.add('is-valid');
    nameValidation.classList.remove('is-invalid');

  }
  //condition to validate the form data

  if (age == "" || age.length > 2) {
    ageValidation.classList.add('is-invalid');
    document.form.age.focus();
    return false;
  } else {
    ageValidation.classList.add('is-valid');
    ageValidation.classList.remove('is-invalid');
  }
  if (phone == "" || phone.length !== 10) {
    // alert("Enter the phone number");
    phoneValidation.classList.add('is-invalid');
    document.form.phone.focus();
    return false;
  } else {
    phoneValidation.classList.add('is-valid');
    phoneValidation.classList.remove('is-invalid');
  }
  if (date == "" || enteredDate < currentDate) {
    dateValidation.classList.add('is-invalid');
    document.form.date.focus();
    return false;
  } else {
    dateValidation.classList.add('is-valid');
    dateValidation.classList.remove('is-invalid');
  }
  if (email == "" || !emailPattern.test(email)) {
    // alert("Enter your Email");
    emailValidation.classList.add('is-invalid');
    document.form.email.value = "";
    document.form.email.focus();
    return false;
  } else {
    emailValidation.classList.add('is-valid');
    emailValidation.classList.remove('is-invalid');

  }
  if (!passwordPattern.test(pass)) {
    // alert("Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be at least 6 characters long.");
    passwordValidation.classList.add('is-invalid');
    document.form.pass.value = "";
    document.form.pass.focus();
    return false;
  } else {
    passwordValidation.classList.add('is-valid');
    passwordValidation.classList.remove('is-invalid');
  }
  if (city == "") {
    locationValidation.classList.add('is-invalid');
    // document.form.pass.value = "";
    document.form.phone.focus();
    return false;
  } else {
    locationValidation.classList.add('is-valid');
    locationValidation.classList.remove('is-invalid');
  }
  if (!checkbox.checked) {
    alert("Please agree to the terms and conditions.");
    return false;
  }
  updateDetails();
  return true;
}

// console.log(formattedDateTime); // Output: "September 22, 2023, 11:06 AM"


