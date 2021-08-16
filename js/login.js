document.getElementById('login-btn').addEventListener('click',function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'meow@gmail' && userPassword == 'meow'){
        window.location.href = 'banking.html'
    }
    // window.location.href   eta dara bujhai ami ekhn je page e aci ba jekhane aci sekhan theke onno page e niye jabe

})

