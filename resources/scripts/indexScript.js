window.onload = enable;
var yFrom = 0, yTo = 0;
function enable() {
    window.addEventListener("scroll", function(){
        var headerDefault = document.getElementsByClassName("header-container__nav")[0];
        if (window.scrollY > 0){
            headerDefault.classList.add("header-container__nav-scrolled");
        } else {
            headerDefault.classList.remove("header-container__nav-scrolled");
        }
    });
    window.addEventListener("scroll", function () {
        var item = document.getElementsByClassName("testScrollText")[0];
        item.textContent = window.pageYOffset;
    });
    window.addEventListener("click", function (e) {
        switch (e.target.className) {
            case "__btn-home":
                e.preventDefault();
                yFrom = window.pageYOffset;
                yTo = 0;
                moveScroll();
                break;
            case "servicesButton":
                e.preventDefault();
                yFrom = window.pageYOffset;
                yTo = 1020;
                moveScroll();
                break;
            default:
                break;
        }
    });
    updateMainText();
}

let textDefault = "";
let i = 0;
function updateMainText() {
    const textMainBackground = document.getElementsByClassName("main-container__h1")[0];
    if (textDefault.length == 0) {
        textDefault = textMainBackground.textContent;
        textMainBackground.textContent = "";
    }
    if (i < textDefault.length){
        textMainBackground.textContent += textDefault[i];
        i++;
        setTimeout(() => {
            updateMainText();
        }, 30);
    } else {
        textMainBackground.classList.add("main-container__h1_effect");
        setTimeout(() => {
            i = 0;
            textMainBackground.textContent = "";
            textMainBackground.classList.remove("main-container__h1_effect");
            updateMainText();
        }, 8000);
    }
}

function moveScroll() {
    var speed = 30;
    if (yFrom == yTo) return;
    if ((yFrom - yTo >= 0 && yFrom - yTo <= speed)) {
        if (yFrom > yTo) {
            yFrom -= 1;
        } else {
            yFrom += 1;
        }
    } else {
        if (yFrom > yTo) {
            yFrom -= speed;
        } else {
            yFrom += speed;
        }
    }
    window.scrollTo(0, yFrom);
    setTimeout(() => {
        moveScroll();
    }, 1);
}