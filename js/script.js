

var menu = document.querySelector('.menu');
var navbar = document.querySelector('.navbar');
var mark = document.querySelector('.mark');

menu.onclick = function(){
    navbar.style.transform = 'translateX(0%)';
}

mark.onclick = function(){
    navbar.style.transform = 'translateX(-100%)';
}




var btn = document.querySelector('.topDown');
var header = document.querySelector('header');
var logo = document.querySelector('.logo a');

btn.onclick = function(){
    window.scrollTo({
        top : 0 ,
        left:0 ,
        behavior : 'smooth',
    })
}
window.onscroll = function(){
    if(window.scrollY >= 100){
        header.style.backgroundColor = 'black';
        logo.style.color = 'white';
        btn.style.display = 'block';
        menu.style.color = 'white';
    }else if(window.scrollY == 0){
        header.style.backgroundColor = null; 
        logo.style.color = null;
        btn.style.display = null; 
        menu.style.color = null;
    }
}
// scroll to bottom
var btn_scroll = document.querySelector('.scroll button');

btn_scroll.onclick = function() {
    window.scrollBy({
        top:500 ,
        left:0,
        behavior: 'smooth'
    })
}

// var section_exp = document.querySelector('#experience');

// window.onscroll = function(){
//     if(window.scrollY >= section_exp.offsetTop){
//         section_exp.style.visibility= 'visible';
//     }
// }






