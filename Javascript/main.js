function myFunction() {
  var x = document.getElementById("your-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//  Get form elements
// // const form = document.querySelector('form');
// // const nameInput = document.getElementById('your-name');
// // const surnameInput = document.getElementById('your-surname');
// // const emailInput = document.getElementById('your-email');
// // const messageInput = document.getElementById('your-message');

//  Listen for form submission
// // form.addEventListener('submit', function(event) {
// //   event.preventDefault();

// //   // Validate form fields
// //   if (nameInput.value === '') {
// //     alert('Please enter your name');
// //     return false;
// //   }

// //   if (surnameInput.value === '') {
// //     alert('Please enter your surname');
// //     return false;
// //   }

// //   if (emailInput.value === '') {
// //     alert('Please enter your email');
// //     return false;
//   // }

//   // if (!validateEmail(emailInput.value)) {
//   //   alert('Please enter a valid email address');
//   //   return false;
//   // }

//   // if (messageInput.value === '') {
//   //   alert('Please enter your message');
//   //   return false;
//   // }

//   // If all fields are valid, submit the form
// //   alert('Form submitted successfully');
// //   return true;
// // });

// // Function to validate email format
// // function validateEmail(email) {
// //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //   return re.test(String(email).toLowerCase());
// // }

// // Function to show/hide password
// // function myFunction() {
// //   const passwordInput = document.getElementById('your-password');
// //   const showCheckbox = document.querySelector('input[type=checkbox]');

// //   if (showCheckbox.checked) {
// //     passwordInput.type = 'text';
// //   } else {
// //     passwordInput.type = 'password';
// //   }
// // }
//  Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
// document.addEventListener("DOMContentLoaded", function(event) {
//    wNavbar('header-toggle','nav-bar','body-pd','header')
  
//   /*===== LINK ACTIVE =====*/
//   const linkColor = document.querySelectorAll('.nav_link')
  
//   function colorLink(){
//   if(linkColor){
//   linkColor.forEach(l=> l.classList.remove('active'))
//   this.classList.add('active')
//   }
//   }
//   linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
//    // Your code to run since DOM is loaded and ready
//   });
  const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});