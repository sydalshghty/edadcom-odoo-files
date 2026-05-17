/*sidepanel supsupcategory*/
if (!sidePanel) return;
if (!document.querySelector(".col-heading-sidepanel"));
const colheading = document.createElement("div");
colheading.className = "col-heading-sidepanel";

const supsupcategory = document.createElement("p");
supsupcategory.textContent = "supsupcategory";
supsupcategory.className = "supsupcategory";

const closesidepanel = document.createElement("div");
closesidepanel.className = "close-sidepanel";

const img = document.createElement("img");
img.src = "https://i.postimg.cc/rF3bBRyJ/x-close.jpg";
img.alt = "close-icon";

const closep = document.createElement("p");
closep.textContent = "Close";

closesidepanel.appendChild(img);
closesidepanel.appendChild(closep);


colheading.appendChild(supsupcategory);
colheading.appendChild(closesidepanel);

const sidePanel = document.createElement("div");
sidePanel.prepend(colheading);




setTimeout(() => {
    const closesidepanel = document.querySelector(".close-sidepanel");
    const sidepanel = document.querySelector(".side-panel");

    if (!sidepanel) return;
    if (!closesidepanel) return;
    closesidepanel.addEventListener("click", () => {
        sidepanel.classList.add("none");
    })
}, 2000)


setTimeout(() => {
    const closeBtn = e.target.closest(".close-sidepanel");

    if (!closeBtn) return;

    const sidepanel = document.querySelector(".side-panel");

    if (!sidepanel) return;

    sidepanel.classList.add("none");
    console.log("side panel")
}, 2000)




document.addEventListener("click", (e) => {

    const sidepanel = document.querySelector(".side-panel");

    if (!sidepanel) return;

    sidepanel.classList.remove("active");
    sidepanel.innerHTML = "";

});


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



/*All SupSup Categories*/
setTimeout(() => {
    const allSupSupCategories = document.querySelectorAll('[data-submenu-id] a');

    if (!allSupSupCategories.length) return;
    allSupSupCategories.forEach((supsupcategory) => {
        supsupcategory.addEventListener("click", () => {
            const value = supsupcategory.textContent;
            console.log(value);

            localStorage.setItem("supsupcategory", value);
        })
    })

}, 2000)


/*check btn login-page*/
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

