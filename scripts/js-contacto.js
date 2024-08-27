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







/**************************** MAPA ******************************/


    // Sí los servicios de geolocalización están disponibles
    if(navigator.geolocation){
        // Para obtener la ubicación actual llama getCurrentPosition
        navigator.geolocation.getCurrentPosition(sucess, error);
    }else{
        alert("Los servicios de geolocalización no están disponibles");
    }
    
    let options = {
        enableHighAccuracy: true,  // queremos la máxima localización correcta
        timeout: 5000,
        maximumAge: 0
    };
    
    
    function sucess(position){
        let latitude = position.coords.latitude; // coger la latitud
        let longitude = position.coords.longitude; // ... la longitud
        // Iniciamos mapa en las coordenadas del usuario
        // let map = L.map('map').setView([latitude, longitude], 14);
        let map = L.map('map', {
            center: [latitude, longitude],
            zoom: 14
        });
    
        // Aplicamos capa/tipo de mapa
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
    
    
        // Calcular la ruta
        let control = L.Routing.control({
            waypoints: [
                L.latLng(latitude, longitude), // position inicial
                L.latLng(39.9787232,-0.0364428,21)     // position final
            ],
            language: 'es',
    
        }).addTo(map);
    }
    
    function error(){
        let map = L.map('map',{
            center: [39.9787232,-0.0364428,21],
            zoom:14
        });
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let marker = L.marker([39.9787232,-0.0364428,21]).bindPopup('Aquí está la tienda').openPopup().addTo(map);
    }












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

