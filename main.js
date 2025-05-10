document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.getElementById('navMenu')

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active')
    })
})

$(document).ready(function () {
  $('.form-container').on('submit', function (e) {
    e.preventDefault();

    // Variables
    const firstName = $('input[placeholder="First Name"]').val().trim();
    const lastName = $('input[placeholder="Last Name"]').val().trim();
    const email = $('input[type="email"]').val().trim();
    const country = $('#country-select').val();
    const phoneNumber = $('.phone-number').val().trim();
    const currency = $('select').last().val();
    const isChecked = $('#terms').is(':checked');

    // Regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Validations
    if (!firstName || !lastName || !email || !country || !phoneNumber || !currency) {
      alert('Please fill in all the fields.');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isChecked) {
      alert('You must accept the privacy policy.');
      return;
    }

    // Submit:
    this.submit();
  });

  // Change the country code
  $('#country-select').on('change', function () {
    const code = $(this).find(':selected').data('code');
    $('.country-code').val(code || '');
  });
});