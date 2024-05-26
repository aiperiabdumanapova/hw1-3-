// const re = /\w+@\w+\.+\w/g;
// const str = "aiperi@gmail.com"
// const myArray = str.match(re);
// console.log(myArray);

function validateForm() {
    
    document.getElementById('login-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    let valid = true;

    const loginRegex = /^\w+$/g; 
    const passwordRegex = /^\w{6,}$/g; 
    const emailRegex = /\w+@\w+\.\w+/g; 

    if (!loginRegex.test(login)) {
        document.getElementById('login-error').style.display = 'block', 'none';
        valid = false;
    }

    if (!passwordRegex.test(password)) {
        document.getElementById('password-error').style.display = 'block', 'none';
        valid = false;
    }

    if (!email.match(emailRegex)) {
        document.getElementById('email-error').style.display = 'block', 'none';
        valid = false;
    }

    if (valid) {
        alert('Вы успешно прошли регистрацию');
    } 
}


