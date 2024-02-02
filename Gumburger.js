const burgerIcon = document.querySelector('.burger-icons')
const closeIcon = document.querySelector(".close-icons")
const menu = document.querySelector(".menu")

console.log(burgerIcon)
console.log(closeIcon)
console.log(menu)

burgerIcon.addEventListener("click",function(){
    menu.style.right="0"
})
closeIcon.addEventListener("click",function(){
    menu.style.right="-100%"
})
document.addEventListener("click",function(event){
if(!menu.contains(event.target)&& event.target !== burgerIcon )
menu.style.right="-100%"
})
window.addEventListener("resize",function(){
    if(window.innerWidth >768){
        menu.style.right="-100%"
    }
    
})
