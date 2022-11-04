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