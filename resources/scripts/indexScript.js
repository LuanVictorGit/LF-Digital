window.onload = enable;
function enable() {
    window.addEventListener("scroll", function(){
        var headerDefault = document.getElementsByClassName("header-container__nav")[0];
        if (window.scrollY > 0){
            headerDefault.classList.add("header-container__nav-scrolled");
        } else {
            headerDefault.classList.remove("header-container__nav-scrolled");
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
        }, 15);
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