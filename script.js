const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const navLink = document.querySelectorAll(".nav-link");


openBtn.addEventListener("click", ()=> {
    navigation.classList.toggle("toggle")
    overlay.style.display="block";
});

closeBtn.addEventListener("click", ()=> {
    navigation.classList.remove("toggle");
    overlay.style.display="none";
});

// Close nav bar when the overlay is clicked
overlay.addEventListener("click", ()=> {
    navigation.classList.remove("toggle");
    overlay.style.display="none";
})

navLink.forEach(link =>{
    link.addEventListener("click", ()=> {
    navigation.classList.remove("toggle");
    overlay.style.display="none";
})
})
// Close the navbar a the list item is clicked


