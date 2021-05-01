//menu responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuclose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

//click abrir
btnMenuOpen.addEventListener("click",function(){
    menuResponsive.classList.add("active");
    
}) ;   

btnMenuClose.addEventListener("click",function(){
    menuResponsive.classList.remove("active");
});

//Cerrar menu con enlaces
enlaces.addEventListener("click",function(){
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");
});

//Menu slider
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnderecho = document.getElementById("btn-derecha");

/*Evento vboton dercho*/
btnderecho.addEventListener("click",function(){
    contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click",function(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});

//Validación de formulario
var formulario = document.getElementById("formulario");

function validar(e){
    var inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        Inputcomments = document.getElementById("comentarios"),
        alertSucces = document.getElementById("alertSucces"),
        alertError = document.getElementById("alertError");

    if(inputNombre.value == 0 || inputEmail.value == 0 || Inputcomments.value == 0 ){
        e.preventDefault();
        //alert("Datos Vacios");
        alertError.classList.remove("hide");
        alertError.classList.add("show");
        setTimeout(function(){
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        },2000);
    }else{
        e.preventDefault();
        //alert("Datos Enviados");
        alertSucces.classList.remove("hide");
        alertSucces.classList.add("show");
        setTimeout(function(){
            alertSucces.classList.remove("show");
            alertSucces.classList.add("hide");
        },2000);

        inputNombre.value = "";
        inputEmail.value = "";
        Inputcomments.value = "";
    }

}

formulario.addEventListener("submit",validar);

//Boton Scroll top
var btntop = document.getElementById("btn-top"),
    logo = document.getElementById("logo"),
     //ancho cokpleto de la pagina web
    fullsize = document.documentElement.offsetHeight,
    //tamaño del Viewport lo que se ve en pantalla
    sizevp = document.documentElement.clientHeight;

//Detectar scroll en pagina web
window.addEventListener("scroll",function(){
    //documentElement llama la padre html
    var scroll = document.documentElement.scrollTop;
    if (scroll> 100){
        btntop.classList.add("show");
    }else{
        btntop.classList.remove("show");
    }
    //modificar el elmento al final de la pagina
    if (fullsize == (scroll + sizevp)){
        btntop.classList.add("scrollfinal");
    }else{
        btntop.classList.remove("scrollfinal");
    }
})

//detectamo evbento click boton
btntop.addEventListener("click",function(){
    window.scrollTo(0,0);
})

//detectar click al logo
logo.addEventListener("click",function(){
    window.scrollTo(0,0);
})