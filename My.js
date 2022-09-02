//show drop-down menu
let links = document.querySelector(".links")
let featureslinks = document.querySelector(".features-links")


links.addEventListener("click", function () {
  featureslinks.classList.toggle("visible-features-links")
})

//scroll down form the main section
let art = document.querySelector('#gallery')
let moveDown = document.getElementById("move-down")
moveDown.onclick = function() {
  scrollBy({
    top: 1800,
    left: 0,
    behaviour: "smooth",
  })
}
//articles
let article = document.querySelectorAll('.article')
article.forEach(function(ele) {
  ele.onclick = function() {
    ele.classList.toggle('article-move-up')
  }
})

//trickwindow.location.href="#how-itworks"