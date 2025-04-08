// Multi-slideshow setup
let numberOfSlideshows = 20;
let slideIndexMulti = Array(numberOfSlideshows).fill(1); // For 10 slideshows
let slideClass = Array.from({ length: numberOfSlideshows }, (_, i) => `mySlides${i + 1}`); // Unique classes

function plusSlidesMulti(n, no) {
    showSlidesMulti(slideIndexMulti[no] += n, no);
}

function showSlidesMulti(n, no) {
    let slides = document.getElementsByClassName(slideClass[no]);
    if (n > slides.length) slideIndexMulti[no] = 1;
    if (n < 1) slideIndexMulti[no] = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    if (slides.length > 0) {
        slides[slideIndexMulti[no] - 1].classList.add("active");
    }
}

window.onload = function () {
    for (let i = 0; i < slideClass.length; i++) {
        showSlidesMulti(1, i);
    }
    autoAdvanceSlides();
};

function autoAdvanceSlides() {
    for (let i = 0; i < slideClass.length; i++) {
        plusSlidesMulti(1, i);
    }
    setTimeout(autoAdvanceSlides, 3000); // sync loop every 3 seconds
}

const links = document.querySelectorAll('.transition-link');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('fade-out');
        const href = this.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Match the CSS transition duration
    });
});

