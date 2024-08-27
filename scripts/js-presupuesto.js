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







/***************************** FORMULARIO *******************************/



let formulario = document.querySelector('#form1');

let nombre = document.querySelector('#name');
let apellido = document.querySelector('#apellido');
let email = document.querySelector('#email');
let tele = document.querySelector('#tele');


let valido = {
    nombre:false,
    apellido:false,
    email:false,
    tele:false,
};


function setErrorFor(input, mensaje) {
    let formControl = input.parentElement; // seleccionar ele elemento padre del input
    let small = formControl.querySelector('.error-mensaje');
    formControl.className = 'error'; // seleccionar la clase de css
    small.innerText = mensaje;
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'success';
}


nombre.addEventListener('blur', ()=>{
    let name_re = /^[a-zA-Z ]{2,15}$/;

    if(nombre.value == '' || nombre.value == null){
        valido.nombre = false;
        setErrorFor(nombre, 'Rellene la casilla');
    }else{
        if(!name_re.exec(nombre.value)){
            valido.nombre = false;
            setErrorFor(nombre, 'Debe tener entre 2 y 15 carácteres');
        }else{
            valido.nombre = true;
            setSuccessFor(nombre);
        }
    }
});



apellido.addEventListener('blur', ()=>{
    let apellido_re = /^[a-zA-Z ]{2,40}$/;

    if(apellido.value == '' || apellido.value == null){
        valido.apellido = false;
        setErrorFor(apellido, 'Rellene la casilla');
    }else{
        if(!apellido_re.exec(apellido.value)){
            valido.apellido = false;
            setErrorFor(apellido, 'Debe tener entre 2 y 40 carácteres');
        }else{
            valido.apellido = true;
            setSuccessFor(apellido);
        }
    }

});



email.addEventListener('blur', ()=>{
    let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value == '' || email.value == null){
        valido.email = false;
        setErrorFor(email, 'Rellene la casilla');
    }else{
        if(!email_re.exec(email.value)){
            valido.email = false;
            setErrorFor(email, 'No ingresó un correo válido');
        }else{
            valido.email = true;
            setSuccessFor(email);
        }
    }

});



tele.addEventListener('blur', ()=>{
    let tele_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;

    if(tele.value == '' || tele.value == null){
        valido.tele = false;
        setErrorFor(tele, 'Rellene la casilla');
    }else{
        if(!tele_re.exec(tele.value)){
            valido.tele = false;
            setErrorFor(tele, 'Debe contener 9 númeos');
        }else{
            valido.tele = true;
            setSuccessFor(tele);
        }
    }

});














formulario.addEventListener('submit',(f)=>{
    f.preventDefault();

    // Comprobar si hay erreres

    let errorV = false;
    for(let property in valido){
        if(valido[property] == false){
            errorV = true; // significa que si que hay error
        }
    };

    if(!errorV){
        formulario.submit();
    }
});





// Agregar evento de cambio al select del producto
const productoSelect = document.getElementById('producto');
productoSelect.addEventListener('change', calcularPresupuesto);

// Función para calcular el presupuesto
function calcularPresupuesto() {
    const plazo = document.getElementById('plazo').value;
    const extras = document.querySelectorAll('input[name="extra"]:checked');
    
    // Obtener el valor seleccionado del producto
    const precioProducto = parseFloat(productoSelect.options[productoSelect.selectedIndex].getAttribute('data-precio'));
    const precioTiempoEntrega = parseFloat(plazo) || 0;
    let precioExtras = 0;
    
    // Calcular el precio de los extras seleccionados
    extras.forEach(extra => {
        precioExtras += parseFloat(extra.getAttribute('data-precio'));
    });
    
    // Calcular el presupuesto final
    let presupuestoFinal = precioProducto - precioTiempoEntrega + precioExtras;
    
    // Mostrar el presupuesto final en la página
    document.getElementById('presupuestoFinal').textContent = '$' + presupuestoFinal.toFixed(2);
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








































