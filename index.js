/* Navigate To Shop Now */

const allSliderCarousel = document.querySelectorAll('[data-snippet="s_cover_2"]');

if (allSliderCarousel.length > 0) {

    allSliderCarousel.forEach((slider) => {

        slider.addEventListener("click", () => {

            window.location.href = "https://www.edadcom.com/shop";

        });

    });

}


/* Categories Swiper-Slider */

setTimeout(() => {

    if (!document.querySelector(".mySwiper")) return;

    new Swiper(".mySwiper", {

        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,

        breakpoints: {
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 6 },
            1200: { slidesPerView: 6 },
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

}, 1000);



/* Open Submenu */

setTimeout(() => {

    const categories = document.querySelectorAll(".tp-menu-category-tab");
    const tpsubmenucontainer = document.querySelector(".tp-submenu-container");

    if (!categories.length || !tpsubmenucontainer) return;

    categories.forEach(el => {

        el.addEventListener("click", () => {

            tpsubmenucontainer.classList.add("active");

        });

    });

}, 2000);



/* Create Top Heading */

setTimeout(() => {

    const allMainCategories = document.querySelector(".tp-tab-container");

    if (!allMainCategories) return;

    if (document.querySelector(".top-heading-categories")) return;

    const topheading = document.createElement("div");

    topheading.className = "top-heading-categories";

    const p = document.createElement("p");
    p.innerText = "All Main Category";

    const closediv = document.createElement("div");
    closediv.className = "col-close";

    const icon = document.createElement("img");

    icon.src = "https://i.postimg.cc/rF3bBRyJ/x-close.jpg";

    const pclose = document.createElement("p");

    pclose.innerText = "Close";

    closediv.appendChild(icon);
    closediv.appendChild(pclose);

    topheading.appendChild(p);
    topheading.appendChild(closediv);

    allMainCategories.prepend(topheading);

}, 2000);



/* Save Sup Category */

setTimeout(() => {

    const allmaincategories = document.querySelectorAll('[tp-menu-id] h6');

    if (!allmaincategories.length) return;

    allmaincategories.forEach((supcategory) => {

        supcategory.addEventListener("click", () => {

            const value = supcategory.textContent.trim();

            localStorage.setItem("subcategory", value);

            const currentSupCategory = document.querySelector(".supcategory");

            if (currentSupCategory) {

                currentSupCategory.innerText = value;

            }

        });

    });

}, 2000);



/* Create Back Menu */

setTimeout(() => {

    const tpsubmenu = document.querySelector(".tp-submenu-container");

    if (!tpsubmenu) return;

    if (document.querySelector(".coldiv")) return;

    const coldiv = document.createElement("div");

    coldiv.className = "coldiv";

    const supcategory = document.createElement("p");

    supcategory.className = "supcategory";

    supcategory.innerText = localStorage.getItem("subcategory") || "";

    const colback = document.createElement("div");

    colback.className = "col-back";

    const icon = document.createElement("img");

    icon.src = "https://i.postimg.cc/GmqdCtbD/chevron-left.jpg";

    const p = document.createElement("p");

    p.innerText = "Back";

    colback.appendChild(icon);
    colback.appendChild(p);

    coldiv.appendChild(colback);
    coldiv.appendChild(supcategory);

    tpsubmenu.prepend(coldiv);

}, 2000);


/* Back Button */

setTimeout(() => {

    const backBtn = document.querySelector(".col-back");

    const tpsubmenucontainer = document.querySelector(".tp-submenu-container");

    if (!backBtn || !tpsubmenucontainer) return;

    backBtn.addEventListener("click", () => {

        tpsubmenucontainer.classList.remove("active");

    });

}, 2000);



/* Add Icons */

function addIconsToFirstLi() {

    const firstLis = document.querySelectorAll(
        ".tp-submenu-container ul li:first-child"
    );

    if (!firstLis.length) return;

    firstLis.forEach((li) => {

        if (li.querySelector(".icon-right")) return;

        const icon = document.createElement("i");

        icon.classList.add(
            "fa-solid",
            "fa-chevron-right",
            "icon-right"
        );

        li.appendChild(icon);

    });

}

addIconsToFirstLi();



const observer = new MutationObserver(() => {

    addIconsToFirstLi();

});

observer.observe(document.body, {

    childList: true,
    subtree: true

});



/* Active LI */

setTimeout(() => {

    const submenuContainer = document.querySelector(".tp-submenu-container");

    if (!submenuContainer) return;

    submenuContainer.addEventListener("click", (e) => {

        const li = e.target.closest("li");

        if (!li) return;

        document.querySelectorAll(".tp-submenu-container li").forEach((item) => {

            item.classList.remove("active");

        });

        li.classList.add("active");

    });

}, 2000);



/* Stop Close Menu */

setTimeout(() => {

    const megaMenu = document.querySelector(".s_category_tabs_snippet");

    if (!megaMenu) return;

    megaMenu.addEventListener("click", (e) => {

        e.stopPropagation();

    });

}, 1000);



/* Close Menu */

setTimeout(() => {

    const menuCategories = document.querySelector(".o_mega_menu");

    const categoriesBtn = document.querySelector(".o_mega_menu_toggle");

    const closeBtn = document.querySelector(".col-close");

    if (!menuCategories || !categoriesBtn || !closeBtn) return;

    closeBtn.addEventListener("click", () => {

        menuCategories.classList.remove("show");

        categoriesBtn.classList.remove("show");

    });

}, 2000);



/* Show Sub Categories */
setTimeout(() => {
    const submenuContainer = document.querySelector(".tp-submenu-container");
    if (!submenuContainer) return;

    submenuContainer.addEventListener("click", (e) => {

        const closeBtn = e.target.closest(".close-sidepanel");
        if (closeBtn) {
            const sidePanel = document.querySelector(".side-panel");
            if (sidePanel) {
                sidePanel.classList.remove("active");
                sidePanel.innerHTML = "";
            }
            return;
        }


        if (e.target.closest(".side-panel")) return;

        const firstLi = e.target.closest("ul > li:first-child");

        if (!firstLi) return;

        // امنع إنه يشتغل لو الـ li ده مش ابن مباشر للكونتينر
        if (firstLi.closest(".tp-submenu-container") !== submenuContainer) return;

        // امنع إنه يشتغل لو جواه side-panel
        if (firstLi.closest(".side-panel")) return;


        const ul = firstLi.closest("ul");
        if (!ul) return;

        const items = ul.querySelectorAll("li");
        const restItems = Array.from(items).slice(1);

        let sidePanel = document.querySelector(".side-panel");

        if (restItems.length === 0) {
            if (sidePanel) {
                sidePanel.classList.remove("active");
                sidePanel.innerHTML = "";
            }
            return;
        }

        if (!sidePanel) {
            sidePanel = document.createElement("div");
            sidePanel.className = "side-panel";
            submenuContainer.appendChild(sidePanel);
        }


        const colheading = document.createElement("div");
        colheading.className = "col-heading-sidepanel";

        const supsupcategory = document.createElement("p");
        supsupcategory.textContent = "Category Details";
        supsupcategory.className = "supsupcategory";

        const closesidepanel = document.createElement("div");
        closesidepanel.className = "close-sidepanel";
        closesidepanel.style.cursor = "pointer";
        const img = document.createElement("img");
        img.src = "https://i.postimg.cc/rF3bBRyJ/x-close.jpg";
        img.alt = "close-icon";

        const closep = document.createElement("p");
        closep.textContent = "Close";

        closesidepanel.appendChild(img);
        closesidepanel.appendChild(closep);

        colheading.appendChild(supsupcategory);
        colheading.appendChild(closesidepanel);

        sidePanel.innerHTML = "";
        sidePanel.appendChild(colheading);

        restItems.forEach((li) => {
            const clone = li.cloneNode(true);
            sidePanel.appendChild(clone);
        });

        sidePanel.classList.add("active");
    });
}, 2000);



/*check btn login-page*/
setTimeout(() => {
    const checkrememberbtn = document.querySelector(".check-remember");
    if (!checkrememberbtn) {
        return;
    }
    checkrememberbtn.addEventListener("click", () => {
        checkrememberbtn.classList.toggle("active")
    });



    const checkrobotbtn = document.querySelector(".check-robot");
    if (!checkrobotbtn) {
        return;
    }
    checkrobotbtn.addEventListener("click", () => {
        checkrobotbtn.classList.toggle("active");
    })


    /*show forget-password-poupop*/
    const resetpasswordbtn = document.querySelector(".reset-password-btn");
    const resetpasswordalert = document.querySelector(".reset-password-alert");
    const form = document.querySelector(".reset-password-alert form");

    if (!resetpasswordbtn) return;
    if (!resetpasswordalert) return;

    resetpasswordbtn.addEventListener("click", (e) => {
        e.preventDefault();
        resetpasswordalert.classList.add("active")
        e.stopPropagation();
    })

    form.addEventListener("click", (e) => {
        e.stopPropagation()
    })

    document.addEventListener("click", (e) => {
        resetpasswordalert.classList.remove("active");
    })
}, 2000)



/*update Product-Page Content*/
setTimeout(() => {
    const productDetailSection = document.getElementById("product_detail");

    const topLinks = document.querySelector(".tp-breadcrumb-wrapper");

    const allLis = document.querySelectorAll(".tp-breadcrumb-wrapper ol li");

    if (!productDetailSection) return;
    productDetailSection.prepend(topLinks);

    if (!topLinks) return;
    topLinks.className = "top-links";

    /*create chevron right-icon*/
    const rightIcon = document.createElement("i");

    rightIcon.className = "fa-solid fa-chevron-right";

    allLis.forEach((li, index) => {


        if (index !== allLis.length - 1) {

            li.appendChild(rightIcon.cloneNode(true));

        }

    });

}, 100)



/*create col-three content on product-information*/
setTimeout(() => {
    const product_detail_main = document.getElementById("product_detail_main");

    const colThreeProduct = document.createElement("div");
    colThreeProduct.className = "col-three-product";

    //create price-product
    const priceProduct = document.querySelector("#product_detail_main .product_price");
    if (!priceProduct) return;
    priceProduct.className = "col-price-product";
    colThreeProduct.prepend(priceProduct);

    //create col-delivery
    const mainDiv = document.createElement("div");
    mainDiv.className = "col-delivery";
    const childDiv = document.createElement("div");
    childDiv.className = "col-deliver";
    const img = document.createElement("img");
    img.src = "https://i.postimg.cc/02q4yjkG/marker-pin-01.png";
    img.alt = "icon-deliver";
    const pDeliver = document.createElement("p");
    pDeliver.innerText = "Deliver to Riyadh";
    childDiv.appendChild(img);
    childDiv.appendChild(pDeliver);

    const rightIcon = document.createElement("i");
    rightIcon.className = "fa-solid fa-chevron-right";

    mainDiv.appendChild(childDiv);
    mainDiv.appendChild(rightIcon);
    colThreeProduct.appendChild(mainDiv);

    //create FREE-delivery
    const freeDeliveryCol = document.createElement("p");
    freeDeliveryCol.className = "freedelivery-col";
    const span = document.createElement("span");
    span.innerHTML = "FREE delivery";
    const p = document.createElement("p");
    p.innerText = "on over 100 SAR";
    freeDeliveryCol.appendChild(span);
    freeDeliveryCol.appendChild(p);
    colThreeProduct.appendChild(freeDeliveryCol);

    /*form update cart-product*/
    const formProduct = document.querySelector('[action="/shop/cart/update"]');
    colThreeProduct.appendChild(formProduct);

    /*create all-col-icons-bottom*/
    const allIcons = document.createElement("div");
    allIcons.className = "all-icons";
    //colIcon1
    const colIcon_1 = document.createElement("div");
    colIcon_1.className = "col-icon";

    const imgIcon1 = document.createElement("img");
    imgIcon1.src = "https://i.postimg.cc/Fs9pcf7g/award-03.png";
    imgIcon1.alt = "icon";

    const p1 = document.createElement("p");
    p1.innerText = "Two-years warranty";

    colIcon_1.appendChild(imgIcon1);
    colIcon_1.appendChild(p1);
    allIcons.appendChild(colIcon_1);

    //colIcon2
    const colIcon_2 = document.createElement("div");
    colIcon_2.className = "col-icon";

    const imgIcon2 = document.createElement("img");
    imgIcon2.src = "https://i.postimg.cc/QdcM3MqN/reverse-right.png";
    imgIcon2.alt = "icon";

    const p2 = document.createElement("p");
    p2.innerText = "Free Returns Terms and Conditions Apply";

    colIcon_2.appendChild(imgIcon2);
    colIcon_2.appendChild(p2);
    allIcons.appendChild(colIcon_2);

    //colIcon3
    const colIcon_3 = document.createElement("div");
    colIcon_3.className = "col-icon";

    const imgIcon3 = document.createElement("img");
    imgIcon3.src = "https://i.postimg.cc/YC3DsJsd/shield-tick-(2).png";
    imgIcon3.alt = "icon";

    const p3 = document.createElement("p");
    p3.innerText = "Secure payments";

    colIcon_3.appendChild(imgIcon3);
    colIcon_3.appendChild(p3);
    allIcons.appendChild(colIcon_3);

    colThreeProduct.appendChild(allIcons);

    if (!product_detail_main) return;
    product_detail_main.appendChild(colThreeProduct);
}, 100)

