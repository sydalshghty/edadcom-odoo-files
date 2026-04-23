/*Navigate To Shpo Now*/
const allSliderCarousel = document.querySelectorAll('[data-snippet="s_cover_2"]');

const navigateSliderToShop = () => {
    if (allSliderCarousel === null) {
        return false;
    }
    else {
        allSliderCarousel.forEach((slider) => {
            slider.addEventListener("click", () => {
                window.location.href = "https://www.edadcom.com/shop"
            })
        })
    }
}
navigateSliderToShop();


/*Categories Swiper-Slider*/
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // موبايل
    spaceBetween: 10,

    breakpoints: {
        576: { slidesPerView: 3 },   // موبايل كبير
        768: { slidesPerView: 4 },   // تابلت
        992: { slidesPerView: 6 },   // لابتوب
        1200: { slidesPerView: 8 },  // ديسكتوب كبير
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
});