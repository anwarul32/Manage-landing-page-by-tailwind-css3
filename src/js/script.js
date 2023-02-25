// Catch button element  
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

// Event Listener 
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})