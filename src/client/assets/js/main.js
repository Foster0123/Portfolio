const hamburger = document.getElementById('hamburger')
const linkList = document.getElementById('link-container')
const themeBtn = document.getElementById('toggle-btn');

themeBtn.addEventListener("click", () => {
    if(themeBtn.className === "bi bi-moon"){
        themeBtn.className = "bi bi-sun";
    }
    else {
        themeBtn.className = "bi bi-moon";
    }
    themeBtn.classList.add("animate-theme-button");
    setTimeout(() => {
        themeBtn.classList.remove("animate-theme-button");
    }, 300);
    console.log("Working");
})
// Hamburger Button Related Code
hamburger.addEventListener('click', () => {
    linkList.classList.toggle('hide-navbar');
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        linkList.classList.remove('display-navbar')
    } else {
        linkList.classList.add('display-navbar')
    }
})

