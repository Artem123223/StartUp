const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      home = document.querySelector(".home"),
      cancel = document.querySelector(".cancel")

burger.addEventListener("click", function() {
    home.style.right = "7%";
    dark.style.display = "block"
})
function cancelBurger() {
    home.style.right = "-200%";
    dark.style.display = "none"
}
cancel.addEventListener("click", cancelBurger)
dark.addEventListener("click", cancelBurger)

const menu = document.querySelector(".menu"),
      icon = document.querySelector("#b"),
      iconstart = document.querySelector("#icon-1"),
      iconmiddle = document.querySelector("#icon-2"),
      iconlast = document.querySelector("#icon-3"),
      txtimg = document.querySelector(".txt-img"),
      hiddentxt = document.querySelectorAll(".hidden-txt"),
      data = document.querySelectorAll(".data p"),
      items = document.querySelectorAll(".items .img"),
      inputs = document.querySelectorAll("form .class")

const getstart = document.querySelector(".getstarted"),
      dolike = document.querySelector(".dolike-btn"),
      readmore = document.querySelectorAll(".readmore"),
      sdx = document.querySelector("#sdx")

const categ = document.querySelectorAll(".categories a")

all.classList.add("toggle")

let sdsx = function (t) {
  t.addEventListener("click", (e) => {
    e.preventDefault()
  })
}

const stier = document.querySelectorAll(".s a")

stier.forEach(btn => btn.addEventListener("click", (e) => {
  e.preventDefault()
  stier.forEach(b => b.classList.remove("backred"))
  btn.classList.toggle("backred")
}))

sdsx(getstart)
sdsx(dolike)
sdsx(sdx)

categ.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault()

    categ.forEach(b => b.classList.remove("toggle"))
    btn.classList.toggle("toggle")
    
    const filterValue = btn.id

    items.forEach(item => {
      const itemCategory = item.getAttribute("data-category")

      if (filterValue === "all" || itemCategory.includes(filterValue)) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })
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

inputs.forEach(btn => btn.addEventListener("change", () => {
  btn.classList.toggle("brdr")
}))