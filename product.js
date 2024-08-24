// script.js
let currentPosition = 0;
const itemsPerSlide = 5;
const totalItems = document.querySelectorAll('.carousel-track img').length;
const totalSlides = Math.ceil(totalItems / itemsPerSlide);

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const trackWidth = document.querySelector('.carousel-container').clientWidth;
    
    currentPosition += direction;

    // Boundary conditions
    if (currentPosition < 0) {
        currentPosition = 0;
    } else if (currentPosition >= totalSlides) {
        currentPosition = totalSlides - 1;
    }

    const translateX = -currentPosition * trackWidth;
    track.style.transform = `translateX(${translateX}px)`;
}
