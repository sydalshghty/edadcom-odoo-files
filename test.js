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


/*show forget-password-poupop*/
const resetpasswordbtn = document.querySelector(".reset-password-btn");
const resetpasswordalert = document.querySelector(".reset-password-alert");

if (!resetpasswordbtn) return;
if (!resetpasswordalert) return;

resetpasswordbtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetpasswordalert.classList.add("active")
})

resetpasswordalert.addEventListener("click", (e) => {
    e.stopPropagation()
})
document.addEventListener("click", (e) => {
    resetpasswordalert.classList.remove("active");
    e.stopPropagation();
})

//sign-up page
//update sign-up form
setTimeout(() => {
    const form = document.querySelector(".oe_signup_form");
    const labelEmail = document.querySelector(".oe_signup_form .field-login label");
    const inputEmail = document.querySelector(".oe_signup_form .field-login input");

    if (labelEmail) {
        labelEmail.innerHTML = "Email address";
    }
    if (inputEmail) {
        inputEmail.setAttribute("placeholder", "Enter your email");
    }

    console.log(form);
    console.log(labelEmail);
    console.log(inputEmail);
}, 2000);

console.log("hello, saeed")


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




setTimeout(() => {
    /*Email*/
    const labelEmail = document.querySelector(".oe_signup_form .field-login label");
    const inputEmail = document.querySelector(".oe_signup_form .field-login input");

    if (labelEmail) {
        labelEmail.innerHTML = "Email address";
    }
    if (inputEmail) {
        inputEmail.setAttribute("placeholder", "Enter your email");
    }

    /*pasword*/
    const labelPassword = document.querySelector(".oe_signup_form .field-password label");
    const inputPassword = document.querySelector(".oe_signup_form .field-password input");

    if (labelPassword) {
        labelPassword.innerHTML = "New Password";
    }
    if (inputPassword) {
        inputPassword.setAttribute("placeholder", "********");
    }

    /*confirmPassword*/
    const labelConfirmP = document.querySelector(".oe_signup_form .field-confirm_password label");
    const inputConfirmP = document.querySelector(".oe_signup_form .field-confirm_password input");

    if (labelConfirmP) {
        labelConfirmP.innerHTML = "Confirm New Password";
    }
    if (inputConfirmP) {
        inputConfirmP.setAttribute("placeholder", "********");
    }

}, 2000);