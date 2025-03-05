//Start of Responsive Menu
const menu = document.querySelector('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
/*const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};*/

//Start of Submit Question Form 
const checkConfirm = (ev) => { 
    if (myPassword.value != myConfirmPassword.value) {
        alert("Oops! Please check your email and password.");
        ev.preventDefault();
    }
    else {
        alert("Thank you everything looks good.");
    }
};

myConfirmation.addEventListener('submit', checkConfirm);
myPassword.addEventListener('submit', checkConfirm);
//End of Submit Question Form

//Capturing the Form Data on the submit event
login.addEventListener('submit', (ev) => {
 alert('${myuser.value} your question has been submitted.')
 login.reset();
 ev.preventDefault();   
});

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
//End of Responsive Menu//