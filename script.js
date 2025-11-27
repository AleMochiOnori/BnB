// Imposta l'anno corrente nel footer
document.getElementById("anno").textContent = new Date().getFullYear();

// Funzioni per il carosello
let currentSlideIndex = 0;
let slides, indicators;

// Inizializza il carosello quando la pagina è caricata
document.addEventListener('DOMContentLoaded', function() {
    slides = document.querySelectorAll('.carousel-slide');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    
    // Crea dinamicamente gli indicatori
    slides.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.onclick = () => currentSlide(index + 1);
        indicatorsContainer.appendChild(indicator);
    });
    
    indicators = document.querySelectorAll('.indicator');
    
    // Auto-scroll del carosello ogni 5 secondi
    setInterval(() => {
        changeSlide(1);
    }, 5000);
});

function showSlide(index) {
    if (!slides || !indicators) return;
    
    // Nasconde tutte le slide
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    
    // Mostra la slide corrente
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function changeSlide(direction) {
    if (!slides) return;
    
    currentSlideIndex += direction;
    
    // Loop infinito
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}
