const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnloginLink = document.querySelector('.btnlogin-popup');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
}); 

btnloginLink .addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
}); 