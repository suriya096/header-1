const menu = document.querySelector('.menu i');
const menuList = document.querySelector('ul');
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-xmark');
    menuList.classList.toggle('slide');
})