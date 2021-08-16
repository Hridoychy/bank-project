document.getElementById('login').addEventListener('click', function () {
    // console.log('button clicked');

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get userpassword
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //chack email and password
    if (userEmail == 'abcd@gmail.com' && userPassword == 'abcd') {
        // console.log('valid user');
        window.location.href = 'banking.html';

    }
});

