let site = document.querySelector('.header__linklist');
let link = document.querySelectorAll('.header__link')

link.forEach(name => {

    if(site.id == name.innerText){
        name.classList.toggle('header__active');
    } 
    
})
