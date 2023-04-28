let slider = document.querySelector("#slider");
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");

function getScrollWidth() {
    let nChilds = slider.querySelectorAll(".slider-pane").length;
    let sWidth = slider.scrollWidth;
    let sOffset = sWidth/nChilds;
    return sOffset;
}

function scrollLeft() {
    let offset = getScrollWidth();
    slider.scrollTo(slider.scrollLeft - offset, 0);
}

function scrollRight() {
    let offset = getScrollWidth();
    slider.scrollTo(slider.scrollLeft + offset, 0);
}
        
btn.addEventListener("click", scrollLeft);
btn2.addEventListener("click", scrollRight);