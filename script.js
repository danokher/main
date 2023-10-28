/* togglear el icono de la barra de navegacion pal responsive ------FUNCIONA-----------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scrollear por las secciones activar link --------------------------------------------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* navbar "sticky" ---------------------------------------------------------------------------------*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* quitar icono toggle y navabar cuando clickear el link del navbar (scroll) --SI FUNCIONA------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* typed js para que vaya escribiendo y borrando el texto multiple-------NO FUNCIONA-------------*/
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true    
});

/* scroll reveal ------------------------NO FUNCIONA-------------------------------------*/
ScrollReveal({ 
    // reset: true,
    distance: '80px' ,
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:
'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



