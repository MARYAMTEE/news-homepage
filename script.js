const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector("nav");

openBtn.addEventListener("click", ()=> {
    navigation.classList.toggle("toggle")
});

closeBtn.addEventListener("click", ()=> {
    navigation.classList.remove("toggle");
})