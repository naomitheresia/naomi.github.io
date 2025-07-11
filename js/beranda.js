let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll(".slide");
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Tampilkan slide pertama saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    showSlide(slideIndex);
    setInterval(nextSlide, 5000); // Auto-slide setiap 5 detik
});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});