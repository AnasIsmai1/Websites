const hamMenu = document.querySelector('.hamMenu');

const offscreenMenu = document.querySelector('.offscreenMenu');

hamMenu.addEventListener('click', () =>{
    hamMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
})
