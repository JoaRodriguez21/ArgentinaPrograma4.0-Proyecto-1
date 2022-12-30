window.addEventListener("scroll", function(){
    const navBar = document.getElementById("navBar");
    navBar.classList.toggle("navBarBottom", window.scrollY>0);
    
})

const typed = new Typed(".typed", {
    strings: [
        "{CV}",
        "{Portfolio}",
        "{Perfil}",
        "{Proyecto}",
        "{Formación}",
        "{Experiencia}",
        "{Camino}",
    ],
    typeSpeed: 50, //velocidad
    backSpeed: 50,
    startDelay: 300,
    shuffle: false, //orden de las palabras
    backDelay: 4000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
    contentType: "html",
})

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
    invert: false,
    },
    // autoHeight: true,
    pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
    }
  });