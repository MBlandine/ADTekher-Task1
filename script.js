

  document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const subject = subjectField.value.trim();
    const message = messageField.value.trim();

    // Error elements
    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    const error4 = document.getElementById('error4');

    // Reset errors
    error1.textContent = '';
    error2.textContent = '';
    error3.textContent = '';
    error4.textContent = '';

    // Validation
    if (name === '') {
      error1.textContent = 'Please enter your name.';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      error2.textContent = 'Please enter your email.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      error2.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (subject === '') {
      error4.textContent = 'Please enter a subject.';
      isValid = false;
    }

    if (message === '') {
      error3.textContent = 'Please enter your message.';
      isValid = false;
    }

    // If everything is valid
    if (isValid) {
      alert('Your message has been sent successfully!');

      // Clear all fields
      nameField.value = '';
      emailField.value = '';
      subjectField.value = '';
      messageField.value = '';
    }
  });















