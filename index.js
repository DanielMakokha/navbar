const button=document.querySelector('.nav_toggle');
const list=document.querySelector('.links')
button.addEventListener('click',function(){
    list.classList.toggle('active_nav')
})