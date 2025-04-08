// Multi-slideshow setup
let numberOfSlideshows = 20;
let slideIndexMulti = Array(numberOfSlideshows).fill(1);
let slideClass = Array.from({ length: numberOfSlideshows }, (_, i) => `mySlides${i + 1}`);

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
    attachPageNavigationListeners(); // Call the new function
};

function autoAdvanceSlides() {
    for (let i = 0; i < slideClass.length; i++) {
        plusSlidesMulti(1, i);
    }
    setTimeout(autoAdvanceSlides, 5000); // sync loop every 3 seconds
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

function attachPageNavigationListeners() {
    const prevPageButtons = document.querySelectorAll('.prev-page-slide');
    const nextPageButtons = document.querySelectorAll('.next-page-slide');

    prevPageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // You might want to perform slideshow-specific "previous" slide logic here if needed
            window.history.back(); // Navigate to the previous page in history
        });
    });

    nextPageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // You might want to perform slideshow-specific "next" slide logic here if needed
            window.history.forward(); // Navigate to the next page in history
        });
    });

    // Multi-slideshow setup
let numberOfSlideshows = 20;
let slideIndexMulti = Array(numberOfSlideshows).fill(1);
let slideClass = Array.from({ length: numberOfSlideshows }, (_, i) => `mySlides${i + 1}`);

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
    attachPageNavigationListeners(); // Call the new function
    attachSlideNavigationListeners(); // Call the new function for slide navigation
};

function autoAdvanceSlides() {
    for (let i = 0; i < slideClass.length; i++) {
        plusSlidesMulti(1, i);
    }
    setTimeout(autoAdvanceSlides, 5000); // sync loop every 5 seconds
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

function attachPageNavigationListeners() {
    const prevPageButtons = document.querySelectorAll('.prev-page-slide');
    const nextPageButtons = document.querySelectorAll('.next-page-slide');

    prevPageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.history.back(); // Navigate to the previous page in history
        });
    });

    nextPageButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            window.history.forward(); // Navigate to the next page in history
        });
    });
}

function attachSlideNavigationListeners() {
    const prevSlideButtons = document.querySelectorAll('.prev-slide');
    const nextSlideButtons = document.querySelectorAll('.next-slide');

    prevSlideButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const slideshowNumber = parseInt(this.dataset.slideshow, 10);
            if (!isNaN(slideshowNumber) && slideshowNumber >= 1 && slideshowNumber <= numberOfSlideshows) {
                plusSlidesMulti(-1, slideshowNumber - 1);
            } else {
                console.error("Invalid slideshow number in 'prev-slide' button.");
            }
        });
    });

    nextSlideButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const slideshowNumber = parseInt(this.dataset.slideshow, 10);
            if (!isNaN(slideshowNumber) && slideshowNumber >= 1 && slideshowNumber <= numberOfSlideshows) {
                plusSlidesMulti(1, slideshowNumber - 1);
            } else {
                console.error("Invalid slideshow number in 'next-slide' button.");
            }
        });
    });
}
}