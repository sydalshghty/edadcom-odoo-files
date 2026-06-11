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
    const mainDiv = document.createElement("a");
    mainDiv.href = "https://www.edadcom.com/shop/payment";
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

    //form update cart-product
    const formProduct = document.querySelector('#product_details form');
    if (!formProduct) return;
    colThreeProduct.appendChild(formProduct);

    //create all-col-icons-bottom
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

    const html = document.querySelector("html");
    if (!html) return;
    const valueLang = html.getAttribute("lang");
    if (valueLang == "en-US") {
        pDeliver.innerText = "Deliver to Riyadh";
        span.innerHTML = "FREE delivery";
        p.innerText = "on over 100 SAR";
        p2.innerText = "Free Returns Terms and Conditions Apply";
        p3.innerText = "Secure payments";
    }
    else if (valueLang == "ar-001") {
        pDeliver.innerText = "توصيل إلي الرياض";
        rightIcon.style.display = "none";
        span.innerHTML = "توصيل مجاني";
        p.innerText = "على أكثر من 100 ريال سعودي";

        p1.innerText = "ضمان لمدة عامين";
        p2.innerText = "إرجاع مجاني _ تنطبق الشروط";
        p3.innerText = "مدفوعات آمنة";

    }
    console.log(html);

}, 1000)

//create col-best-drills-products
const bestDrillsLink = document.createElement("a");
bestDrillsLink.href = "https://www.edadcom.com/ar/shop/category/dwt-khrbyy-drills-and-drivers-11";

const imgBestDrills = document.createElement("img");
imgBestDrills.src = "https://i.postimg.cc/cH9k1cMj/Component-32-(2).png";
imgBestDrills.alt = "img-best-drills";

bestDrillsLink.appendChild(imgBestDrills);
if (!cloneProductPrice) return;
cloneProductPrice.after(bestDrillsLink);


const cloneProductPrice = productPrice.cloneNode(true);


const bestDrillsLink = document.createElement("a");

bestDrillsLink.style.marginBottom = "20px";
bestDrillsLink.className = "best-drills-link";