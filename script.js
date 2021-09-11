const toogleButton= document.getElementsByClassName('nav-toogler')[0]
const navBarLinks= document.getElementsByClassName('navbar-links')[0]
 
toogleButton.addEventListener('click',()=>{
    navBarLinks.classList.toggle("active");
})