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

}, 200)



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
}, 10)




/*update out of stock*/
setTimeout(() => {
    let notificationStock = document.querySelector("#product_stock_notification_message");
    const iconNotifiaction = document.createElement("img");
    iconNotifiaction.src = "https://i.postimg.cc/N0Jv8Sj0/bell-ringing-01.png";
    iconNotifiaction.alt = "icon-notifaction";
    if (!notificationStock) return;
    notificationStock.prepend(iconNotifiaction);
}, 2000)


setTimeout(() => {
    const sendEmailBtn = document.querySelector("#product_stock_notification_form_submit_button");
    const iconSend = document.createElement("img");
    iconSend.src = "";
    iconSend.alt = "icon-send";
    if (!sendEmailBtn) return;
    sendEmailBtn.prepend(iconSend);
}, 2000)
