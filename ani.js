let odds = document.querySelectorAll('.odd')
let evens = document.querySelectorAll('.even')
let goUp = document.querySelector('.go-up')
let containSkills = document.querySelector('.contain-skills')
let skills = document.querySelectorAll('.skill div')
//go up btnl
window.onscroll = function () {
  if (window.scrollY >= articles.offsetTop) {
    goUp.style.visibility = "visible"
    goUp.onclick = function() {
      window.scrollTo({
        left: 0,
        top: 0,
        behaviour: "smooth"
      })
    }
  } else {
    goUp.style.visibility = "hidden"
  }
  // content visibility
  for (i = 0; i < odds.length; i++) {
    if (window.scrollY >= odds[i].offsetTop - 500) {
      odds[i].classList.add('show-odd')
    }
  }
  for (k = 0; k < evens.length; k++) {
    if (window.scrollY >= evens[k].offsetTop - 500) {
      evens[k].classList.add('show-even')
    }
  }
  // skills
  if (window.scrollY >= containSkills.offsetTop - 1000) {
    skills.forEach(function(ele) {
      ele.style.width = "100%";
    })
  }
}