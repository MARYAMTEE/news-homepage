const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector("nav");
const overlay = document.querySelector(".overlay");


openBtn.addEventListener("click", ()=> {
    navigation.classList.toggle("toggle")
    overlay.style.display="block";
});

closeBtn.addEventListener("click", ()=> {
    navigation.classList.remove("toggle");
    overlay.style.display="none";
})


