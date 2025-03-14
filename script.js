const images = document.querySelectorAll('.photos img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('#lightbox-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImageIndex = 0;

// Otwieranie lightboxa po kliknięciu na zdjęcie
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(images[currentImageIndex].src);
    });
});

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    setTimeout(() => lightboxImg.classList.add('show'), 10);
}

// Zamknięcie lightboxa po kliknięciu poza zdjęcie (ale nie na strzałki)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightboxImg.classList.remove('show');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300);
}

// Przechodzenie między zdjęciami
function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    lightboxImg.classList.remove('show');

    setTimeout(() => {
        lightboxImg.src = images[currentImageIndex].src;
        lightboxImg.classList.add('show');
    }, 300);
}

// Obsługa kliknięć na przyciski
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Zatrzymuje propagację, aby lightbox się nie zamknął
    changeImage(-1);
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    changeImage(1);
});

// Obsługa klawiatury
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'Escape') closeLightbox();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    imageContainer.classList.add("scale-up-hor-left");
});
