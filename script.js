const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.scrollY + ((window.innerHeight * 3)/4);
    target.forEach(function(elemento){
        if((windowTop) > elemento.offsetTop){
            elemento.classList.add(animationClass);
        }
        else{
            
            elemento.classList.remove(animationClass);
        }
    })
}


if(target.length){
    window.addEventListener('scroll',function(){
        animeScroll();
    });
}