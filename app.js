const nav = document.getElementById('nav_links');
const btn = document.getElementById('menu')
const cross = document.getElementById('cross_icon');

btn.addEventListener('click', function () {
    nav.classList.toggle('active')
    btn.style.display = 'none';
    cross.style.display ='block';
})

cross.addEventListener('click', function () {
    nav.classList.toggle('active')
    btn.style.display = 'block';
    cross.style.display ='none';
})


//slider 
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    loop:true,
  }); 