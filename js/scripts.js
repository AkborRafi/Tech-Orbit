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
}
