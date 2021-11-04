const slideImg = document.querySelectorAll(".slide-img");
//const slideContainer= document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const singleDot = document.querySelectorAll(".single-dot");
let numImgs = slideImg.length;

let slideIndex = 0;

nextBtn.addEventListener("click", () => {
    slideImg.forEach(slide => {
        slide.classList.remove("active");
    })
    singleDot.forEach(dot => {
        dot.classList.remove("active");
    })
    slideIndex++;
    if (slideIndex > (numImgs -1)) {
        slideIndex = 0;
    }
    slideImg[slideIndex].classList.add("active");
    singleDot[slideIndex].classList.add("active");
}) 
prevBtn.addEventListener("click", () => {
    slideImg.forEach(slide => {
        slide.classList.remove("active");
    })
    singleDot.forEach(dot => {
        dot.classList.remove("active");
    })
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = numImgs - 1;
    }
    slideImg[slideIndex].classList.add("active");
    singleDot[slideIndex].classList.add("active");
})


// const slideImgs = () => {
//     slideImg.forEach(slide => {
//         slide.classList.remove("active");
//     })
//     singleDot.forEach(dot => {
//         dot.classList.remove("active");
//     })
//     slideIndex++;
//     if (slideIndex > (numImgs -1)) {
//         slideIndex = 0;
//     }
//     slideImg[slideIndex].classList.add("active");
//     singleDot[slideIndex].classList.add("active");
//     setTimeout(slideImgs, 3000);
// }
// slideImgs();

