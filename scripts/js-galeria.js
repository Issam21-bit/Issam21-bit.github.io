// SELECCIÓN PERMANENTE


let enlaces = document.querySelectorAll('.lista li a');
// forEach = un bucle
enlaces.forEach(function(element){
    element.addEventListener('click', function(event){
        // console.log(event.target);
        enlaces.forEach(function(link){
            link.classList.remove('active');
        })
        event.target.classList.add('active');// target = al elemento que le hemos hecho un click ...
        menu.style.left = '-100%';    // menu hamburgesa
    })
});

// main





let list2 = document.querySelector('.slider2 .list2');
let items2 = document.querySelectorAll('.slider2 .list2 .item2');
let dots2 = document.querySelectorAll('.slider2 .dots2 li');
let prev2 = document.getElementById('prev2');
let next2 = document.getElementById('next2');

let active2 = 0;
let lengthitems2 = items2.length - 1;

next2.addEventListener('click', ()=>{
    if(active2 + 1 > lengthitems2){
        active2 = 0;
    }else{
        active2 = active2 + 1;
    }
    reloadSlider2();
})
prev2.addEventListener('click', ()=>{
    if(active2 - 1 < 0){
        active2 = lengthitems2;
    }else{
        active2 = active2 - 1;
    }
    reloadSlider2();
})
let refreshSlider2 = setInterval(()=>{next2.click()}, 8000);
function reloadSlider2(){
    let checkLeft2 = items2[active2].offsetLeft;
    list2.style.left = -checkLeft2 + 'px';

    let lastActiveDot2 = document.querySelector('.slider2 .dots2 li.active2');
    lastActiveDot2.classList.remove('active2');
    dots2[active2].classList.add('active2');
    
}
dots2.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active2 = key;
        reloadSlider2();
    })
})









let list3 = document.querySelector('.slider3 .list3');
let items3 = document.querySelectorAll('.slider3 .list3 .item3');
let dots3 = document.querySelectorAll('.slider3 .dots3 li');
let prev3 = document.getElementById('prev3');
let next3 = document.getElementById('next3');

let active3 = 0;
let lengthitems3 = items3.length - 1;

next3.addEventListener('click', ()=>{
    if(active3 + 1 > lengthitems3){
        active3 = 0;
    }else{
        active3 = active3 + 1;
    }
    reloadSlider3();
})
prev3.addEventListener('click', ()=>{
    if(active3 - 1 < 0){
        active3 = lengthitems3;
    }else{
        active3 = active3 - 1;
    }
    reloadSlider3();
})
let refreshSlider3 = setInterval(()=>{next3.click()}, 8000);
function reloadSlider3(){
    let checkLeft3 = items3[active3].offsetLeft;
    list3.style.left = -checkLeft3 + 'px';

    let lastActiveDot3 = document.querySelector('.slider3 .dots3 li.active3');
    lastActiveDot3.classList.remove('active3');
    dots3[active3].classList.add('active3');
    
}
dots3.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active3 = key;
        reloadSlider3();
    })
})




/************************************ Menu amburgesa *******************************************/

let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-content');

let activador = true;

btnMenu.addEventListener('click', () =>{
    barIconX.classList.toggle('fa-times');

    if(activador){
        menu.style.left = '0px';
        activador = false;
    }else{
        menu.style.left = '-100%';
        activador = true;
    }
});






// SCROLL



let menuContent = document.querySelector('.menu');
let preScrollPos = window.pageYOffset;
let gotop = document.querySelector('.go-top');

window.addEventListener('scroll', function(){
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);

    if(preScrollPos>currentScrollPos){
        menuContent.style.top='0px';
        menuContent.style.transition='0.5s';
    }else{
        menuContent.style.top='-100px';
        menuContent.style.transition='0.5s';
    }

    preScrollPos = currentScrollPos;


    /********Mostrar y ocultar barra arriba********/

    let position = window.pageYOffset;


    if(position <= 600){
        gotop.style.right='-100px';
        menuContent.style.background='none';
    }else{
        gotop.style.right='0px';
        menuContent.style.background='#000';
    }
});


/*******************Subir arriba******************/

gotop.addEventListener('click', function(){
    document.documentElement.scrollTop=0;
})


let abajo = document.querySelector('#abajo');

/*******************bajar abajo******************/

abajo.addEventListener('click', function(){
    document.documentElement.scrollTop=600;
});



// Al hacer clic sobre el logo se regarga la página


let logo = document.getElementById('logo');

logo.addEventListener('click', ()=>{
    window.location.href = '../index.html';
})
























