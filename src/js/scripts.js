const dark = document.querySelector(".dark-bgc"),
      burger = document.querySelector(".burger"),
      home = document.querySelector(".home"),
      cancel = document.querySelector(".cancel")

burger.addEventListener("click", function() {
    home.style.right = "0";
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
      inputs = document.querySelectorAll("form .class"),
      scrollto = document.querySelectorAll(".home a")

const getstart = document.querySelector(".getstarted"),
      dolike = document.querySelector(".dolike-btn"),
      readmore = document.querySelectorAll(".readmore"),
      sdx = document.querySelector("#sdx")

const categ = document.querySelectorAll(".categories a")

const blocks = [
    document.querySelector("#zero"),
    document.querySelector("#one"),
    document.querySelector("#two"),
    document.querySelector("#three"),
    document.querySelector("#four"),
    document.querySelector("#five"),
    document.querySelector("#six")
];

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
  e.preventDefault();
  
  hiddentxt[index].classList.toggle("block");

  if (hiddentxt[index].classList.contains("block")) {
    btn.textContent = "close";
  } else {
    btn.textContent = "read more";
  }
}));

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

const header = document.querySelector("header"),
      bg = document.querySelector(".bg-parallax")

header.addEventListener("mousemove", function(e) {
  const width = window.innerWidth
  const height = window.innerHeight
  const mouseX = e.clientX,
        mouseY = e.clientY
  const moveX = (mouseX / width * 30) - 15,
        moveY = (mouseY / height * 30) - 15

  bg.style.transform = `translate(${moveX}px, ${moveY}px)`
})

const doyou = document.querySelector(".doyou"),
      paralax = document.querySelector(".bg-paralax")

doyou.addEventListener("mousemove", (e) => {
  const width = window.innerWidth
  const height = window.innerHeight
  const mouseX = e.clientX,
        mouseY = e.clientY
  const moveX = (mouseX / width * 30) - 15,
        moveY = (mouseY / height * 30) - 15

  paralax.style.transform = `translate(${moveX}px, ${moveY}px)`
})

scrollto.forEach((btn, index) => btn.addEventListener("click", (e) => {
  e.preventDefault()

  const takeblock = blocks[index]
  const position = takeblock.offsetTop

  window.scrollTo({
    top: position,
    behavior: "smooth"
  });
}))

const leftbtn = document.querySelector(".left_button"),
      rightbtn = document.querySelector(".right_button")

const first = document.querySelector(".card1"),
      second = document.querySelector(".card2"),
      third = document.querySelector(".card3"),
      fourth = document.querySelector(".card4"),
      cards = document.querySelector(".cards"),
      allcards = document.querySelectorAll(".cards .nb")

leftbtn.addEventListener("click", (e) => {
  let takebtn = cards.children[0].cloneNode(true)
  cards.children[0].remove()
  cards.insertAdjacentElement("beforeend", takebtn)
})

console.log(cards.children)

rightbtn.addEventListener("click", (e) => {
  let takebtn = cards.children[4].cloneNode(true)
  cards.children[4].remove()
  cards.insertAdjacentElement("afterbegin", takebtn)
})

const parent = document.querySelector(".slider-logs"),
      txt = document.querySelector(".txt-logs")
let x = 0

let slider = setInterval(() => {
  x++
  let goback = parent.children[0].cloneNode(true)
  parent.children[0].remove()
  parent.insertAdjacentElement("beforeend", goback)
  if(x == 1) txt.textContent = "Artem"
  if(x == 2) txt.textContent = "HashTag"
  if(x == 3) txt.textContent = "Google"
  if(x == 4) txt.textContent = "Vasya"
  if(x == 5) txt.textContent = "John Doe, Google Inc."
  if(x == 6) {
    txt.textContent = "Artem"
    x = 1
  }
}, 2000)

parent.addEventListener("mouseenter", () => {
  clearInterval(slider)
})

parent.addEventListener("mouseleave", () => {
  slider = setInterval(() => {
    x++
    let goback = parent.children[0].cloneNode(true)
    parent.children[0].remove()
    parent.insertAdjacentElement("beforeend", goback)
    if(x == 1) txt.textContent = "Artem"
    if(x == 2) txt.textContent = "HashTag"
    if(x == 3) txt.textContent = "Google"
    if(x == 4) txt.textContent = "Vasya"
    if(x == 5) txt.textContent = "John Doe, Google Inc."
    if(x == 6) {
      txt.textContent = "Artem"
      x = 1
    }
  }, 2000)
})