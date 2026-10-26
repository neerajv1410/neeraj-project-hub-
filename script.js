document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");
    const images = document.querySelectorAll(".portfolio-item img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function showImage(index){
        popup.style.display = "block";
        popupImg.src = images[index].src;
        currentIndex = index;
    }

    images.forEach((img,index)=>{
        img.addEventListener("click",function(){
            showImage(index);
        });
    });

    closeBtn.onclick = function(){
        popup.style.display = "none";
    }

    popup.onclick = function(e){
        if(e.target === popup){
            popup.style.display = "none";
        }
    }

    nextBtn.onclick = function(){
        currentIndex++;
        if(currentIndex >= images.length){
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    prevBtn.onclick = function(){
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }
    document.addEventListener("keydown", function(e){

    if(popup.style.display === "block"){

        if(e.key === "ArrowRight"){
            nextBtn.click();
        }

        if(e.key === "ArrowLeft"){
            prevBtn.click();
        }

        if(e.key === "Escape"){
            closeBtn.click();
        }

    }

});

});
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.onclick = function () {
    nav.classList.toggle("active");
};
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const typingText = document.querySelector(".typing-text");

const words = [
    "Website Designer",
    "Video Editing",
    "Resume Designer",
    "Excel Expert",
    "Project Maker",
    "Poster Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
// Back To Top Button

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
