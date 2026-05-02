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
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,


    breakpoints: {
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 6 },
        1200: { slidesPerView: 7 },
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    speed: 800,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
});
