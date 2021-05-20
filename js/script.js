var nameInput = document.getElementsByClassName("inputbox");
var submit = document.getElementById("submit");
var textbox = document.getElementsByClassName("textbox");
var mail = document.getElementById("email");
var phone = document.getElementById("phone");
var content = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;       // لازم ادرسها اكتر

                                                            // Error message of empty || wrong input in the form function
submit.onclick = function () {
    "use strict";
    var i;
    for (i = 0; i < textbox.length; i++) {
        textbox[i].parentElement.classList.remove("error");
        textbox[i].parentElement.nextElementSibling.classList.add("hidden");

        if (!textbox[i].value) {
            textbox[i].parentElement.classList.add("error");
            textbox[i].parentElement.nextElementSibling.classList.remove("hidden");
        } else if (!mail.value.match(content)) {
            mail.parentElement.nextElementSibling.classList.remove("hidden");
            mail.parentElement.classList.add("error");
        } else if (textbox[0].value && mail.value.match(content) && phone.value.match(/^[0-9]+$/)  && textbox[3].value) {
            nameInput[i].parentElement.style.display = 'none';
            document.getElementById("success").style.opacity = '1';
        } else if (!phone.value.match(/^[0-9]+$/)) {
            phone.parentElement.nextElementSibling.classList.remove("hidden");
            phone.parentElement.classList.add("error");
        }
    }
};

                                            // remove error massege when typing in input

function validation (id) {
    document.getElementById(id).parentElement.classList.remove("error");
    document.getElementById(id).parentElement.nextElementSibling.classList.add("hidden");
}

                                            //swipe up label function


function focusFunction (id) {
    "use strict";
    document.getElementById(id).nextElementSibling.classList.add ("onfocus");
};
function blurFunction (id) {
    "use strict";
    if (!document.getElementById(id).value) {
        document.getElementById(id).nextElementSibling.classList.remove ("onfocus");
    }

};
                                            // validate email 

function validemail () {
    if (mail.value && !mail.value.match(content)) {
        mail.parentElement.nextElementSibling.textContent = "must include @ in your email character";
        mail.parentElement.nextElementSibling.classList.remove("hidden");
        mail.parentElement.classList.add("error");
    }else if (!mail.value) {
        mail.parentElement.nextElementSibling.textContent = "Your Email is required";
    }
};

function validephone() {
    if (phone.value && !phone.value.match(/^[0-9]+$/)) {
        phone.parentElement.nextElementSibling.textContent = "You must use just a number (0-9)";
        phone.parentElement.nextElementSibling.classList.remove("hidden");
        phone.parentElement.classList.add("error");
        return false;
    }else if (!mail.value) {
        phone.parentElement.nextElementSibling.textContent = "Your Email is required";
    }
}