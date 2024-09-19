





document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (event) {

        let name = document.getElementById('username').value;
        let email = document.getElementById('useremail').value;
        let phone = document.getElementById('userphone').value;
        let pass = document.getElementById('password').value;


        let nameRegex = /^[A-Za-z\s]+$/;
        let emailRegex = /^[\dA-Za-z]+@[A-Za-z]+\.[A-Za-z]+$/;
        let phoneRegex = /^[\d]+$/;
        let passRegex = /^[A-Za-z\d\W]+$/;


        if (name == '' || pass == '' || email == '' || phone == '' || !nameRegex.test(name) || !passRegex.test(pass) || !emailRegex.test(email) || !phoneRegex.test(phone)) {
            alert('please fill the data with valid field');
        } else {
            alert('NAME:' + name + '\npassword:' + pass + '\nEmail:' + email + '\nNumber:' + phone);

        }
    });
});