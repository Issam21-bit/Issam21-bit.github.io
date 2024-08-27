/************************************************** JSON *********************************************************/



//Cargar noticias desde el archivo <JSON> 

fetch('assets/json/noticias.json')
    .then(response => response.json())
    .then(data => {
        const noticiasDiv = document.getElementById('noticias');

        // Crear un contenedor div con la clase "container"
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        // Crear un div para el título principal "NOTICIAS"
        const noticiasTitleDiv = document.createElement('div');
        noticiasTitleDiv.classList.add('noticias-title');

        // Crear un elemento h1 para el título "NOTICIAS"
        const tituloH1 = document.createElement('h1');
        tituloH1.textContent = "Eventos y Novedades";

        // Agregar el título h1 al div de noticias-title
        noticiasTitleDiv.appendChild(tituloH1);

        // Agregar el div de noticias-title al contenedor
        containerDiv.appendChild(noticiasTitleDiv);

        // Crear hr para el div de noticias-title
        const hrElement = document.createElement('hr');
        noticiasTitleDiv.appendChild(hrElement);

        // Crear un div contenedor para los articles
        const articlesContainer = document.createElement('div');
        articlesContainer.classList.add('container-article'); // Agrega la clase al contenedor

        data.noticias.forEach(noticias => {
            const article = document.createElement('article');

            // Crear un elemento div para cada noticia
            const noticiaDiv = document.createElement('div');
            noticiaDiv.classList.add('noticia');

            // Crear un elemento h2 para el título de la noticia
            const tituloH2 = document.createElement('h2');
            tituloH2.textContent = noticias.titulo;

            // Agregar el título h2 al div de la noticia
            noticiaDiv.appendChild(tituloH2);

            // Crear un elemento p para el contenido de la noticia
            const contenidoP = document.createElement('p');
            contenidoP.textContent = noticias.contenido;

            // Agregar el contenido p al div de la noticia
            noticiaDiv.appendChild(contenidoP);

            // Agregar el div de la noticia al artículo
            article.appendChild(noticiaDiv);

            // Agregar cada noticia al contenedor de articles
            articlesContainer.appendChild(article);
        });

        // Agregar el contenedor-article al contenedor
        containerDiv.appendChild(articlesContainer);

        // Agregar el contenedor al div de noticias principal
        noticiasDiv.appendChild(containerDiv);
    })
    .catch(error => console.error('Error al cargar noticias:', error));









/************************************************** HTML *********************************************************/


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



// SCROLL



let menuContent = document.querySelector('.menu');
let preScrollPos = window.pageYOffset;
let gotop = document.querySelector('.go-top');

window.addEventListener('scroll', function(){
    /********Mostrar y ocultar barra arriba********/
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);

    if(preScrollPos>currentScrollPos){
        menuContent.style.top='0px';
        menuContent.style.transition='0.8s';
    }else{
        menuContent.style.top='-100';
        menuContent.style.transition='0.8s';
    }

    let position = window.pageYOffset;

    if(position <= 600){       
        menuContent.style.background='none';
    }else{
        menuContent.style.background='#000';
    }

    preScrollPos = currentScrollPos;



    /********Boton subir arriba********/
    

    if(position <= 600){
        gotop.style.right='-100px';
    }else{
        gotop.style.right='0px';
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
    window.location.reload();
})



let g_boton = document.getElementById('g-boton');

g_boton.addEventListener('click', ()=>{
    window.location.href = '../views/galeria.html';
})





/************************************ Menu amburgesa ***H****************************************/

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

