
//login popup
document.addEventListener("DOMContentLoaded", function() {
    var loginBtn = document.getElementById("loginBtn");
    var popup = document.getElementById("loginPopup");
    var closeBtn = document.getElementById("closeBtn");

    loginBtn.addEventListener("click", function() {
        popup.style.display = 'block';
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            popup.style.display = 'none';
        }
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = 'none';
    });
});


//carousel effect
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);

    
    showSlide(currentSlide);
});
