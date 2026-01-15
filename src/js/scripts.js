const menu = document.querySelector(".menu"),
      icon = document.querySelector("#b"),
      iconstart = document.querySelector("#icon-1"),
      iconmiddle = document.querySelector("#icon-2"),
      iconlast = document.querySelector("#icon-3"),
      all = document.querySelector("#ds"),
      branding = document.querySelector("#ks"),
      design = document.querySelector("#vs"),
      development = document.querySelector("#gs"),
      strategy = document.querySelector("#ws"),
      txtimg = document.querySelector(".txt-img"),
      hiddentxt = document.querySelectorAll(".hidden-txt"),
      data = document.querySelectorAll(".data p")

const img1 = document.querySelector(".img-1"),
      img2 = document.querySelector(".img-2"),
      img3 = document.querySelector(".img-3"),
      img4 = document.querySelector(".img-4"),
      img5 = document.querySelector(".img-5"),
      img6 = document.querySelector(".img-6"),
      img7 = document.querySelector(".img-7"),
      img8 = document.querySelector(".img-8"),
      img9 = document.querySelector(".img-9")

const getstart = document.querySelector(".getstarted"),
      dolike = document.querySelector(".dolike-btn"),
      readmore = document.querySelectorAll(".readmore")

const categ = document.querySelectorAll(".categories a")
const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

all.classList.add("toggle")

let sdsx = function (t) {
  t.addEventListener("click", (e) => {
    e.preventDefault()
  })
}

sdsx(getstart)
sdsx(dolike)

categ.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault()

    categ.forEach(b => b.classList.remove("toggle"))
    item.classList.toggle("toggle")

    img.forEach(c => c.style.display = "none")

    if(item === all) {
      img.forEach(c => c.style.display = "block")
    } else if(item === branding) {
      img1.style.display = "block"
      img9.style.display = "block"
      img3.style.display = "block"
      img7.style.display = "block"
    } else if(item === design) {
      img2.style.display = "block"
      img3.style.display = "block"
      img8.style.display = "block"
    } else if(item === development) {
      img3.style.display = "block"
      img5.style.display = "block"
      img9.style.display = "block"
      img4.style.display = "block"
    } else if(item === strategy) {
      img4.style.display = "block"
      img6.style.display = "block"
      img8.style.display = "block"
    }
  })
})

window.addEventListener("scroll", () => {
  if(window.scrollY > 0) {
    menu.classList.add("active")
  } else {
    menu.classList.remove("active")
  }
});

let clicks = 0;
let timer = null;

clickOn = function(e) {
  e.preventDefault()
}

icon.addEventListener("click", () => {
  clicks++;

  if (clicks === 1) {
    timer = setTimeout(() => {
      clicks = 0;
    }, 500);
  }

  if (clicks === 3) {
    clearTimeout(timer);
    clicks = 0;

    iconstart.textContent = "Hack"
    iconmiddle.textContent = "This"
    iconlast.textContent = "Site"
    iconstart.classList.add("bigger-h")
    iconmiddle.classList.add("bigger-h")
    iconlast.classList.add("bigger-h")
  }
})

readmore.forEach((btn, index) => btn.addEventListener("click", e => {
  e.preventDefault()

  switch(index) {
    case 0: 
      hiddentxt[0].classList.toggle("block")
      break
    case 1:
      hiddentxt[1].classList.toggle("block")
      break
  }
}))

let joker = new Date()
let days = joker.getDate(),
    months = joker.getMonth()

let namMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

data[0].textContent = days
data[1].textContent = namMonths[months]
data[2].textContent = days
data[3].textContent = namMonths[months]