const images  = document.querySelectorAll('.conte .loshara .loshra img');
const loshara = document.querySelector('.loshara');
let count = 0;
let width;

function init() {
    width = document.querySelector('.loshra img').offsetWidth;
    loshara.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSider();
}

init();
document.querySelector('.SmehSed').addEventListener('click',function(){
 count++;
 if(count >= images.length ){
    count = 0 ;
 }
 rollSider();
})
document.querySelector('.SmehPre').addEventListener('click',function(){
 count--;
 if(count < 0){
    count = images.length -1 ;
 }
 rollSider();
})
function rollSider(){
    loshara.style.transform = 'translateX(-'+ count * width + 'px';
}
