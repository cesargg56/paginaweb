/*seleccion de elemento */
const menuToogle =document.querySelector('.menu-toggle');
const navLinks =document.querySelector('.nav-links');
const buttons =document.querySelectorAll('.btn');

/*funciones*/

/*evento clik*/

if(menuToogle && navLinks){
    menuToogle.addEventListener('click',function(){
navLinks.classList.toggle('active')});
    }

    if(navLinks){
        navLinks.classList.add('hidden');
            navLinks.classList.remove('hidden');
    }

    /*eventos a botones*/

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            alert('has hecho clic en un boton')
        })

    })