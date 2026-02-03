document.addEventListener("DOMContentLoaded", function() {
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

  const txtsuma = document.querySelector(".sum")

  function updateSum() {
    let suma = 0
    let carj = JSON.parse(localStorage.getItem("carj")) || []

    carj.forEach(item => {
        let price = parseInt(item.price)
        let count = item.count || 1
        suma += price * count
    })

    if (txtsuma) {
        txtsuma.textContent = `Sum: ${suma}$`
    }
  }

  const menu = document.querySelector(".menu"),
        icon = document.querySelector("#b"),
        iconstart = document.querySelector("#icon-1"),
        iconmiddle = document.querySelector("#icon-2"),
        iconlast = document.querySelector("#icon-3"),
        hiddentxt = document.querySelectorAll(".hidden-txt"),
        data = document.querySelectorAll(".data p"),
        items = document.querySelectorAll(".items .img"),
        inputs = document.querySelectorAll("form .class"),
        scrollto = document.querySelectorAll(".home a"),
        main = document.querySelector("main")

  const getstart = document.querySelector(".getstarted"),
        dolike = document.querySelector(".dolike-btn"),
        readmore = document.querySelectorAll(".readmore"),
        sdx = document.querySelector("#sdx"),
        cance = document.querySelector(".cance")

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

  sdsx(getstart)
  sdsx(sdx)

  dolike.addEventListener("click", (e) => {
    e.preventDefault()
    let pos = main.lastChild
    console.log()
    scrollTo({
      top: pos.offsetTop,
      behavior: "smooth"
    })
  })

  cance.addEventListener("click", (e) => {
    e.preventDefault()
    div.classList.remove("blick")
  })

  const savedCategory = localStorage.getItem("selectedCategory") || "all";

  const applyFilter = (filterValue) => {
    items.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (filterValue === "all" || itemCategory.includes(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    categ.forEach(b => {
      b.classList.remove("toggle");
      if (b.id === filterValue) {
        b.classList.add("toggle");
      }
    });
  };

  applyFilter(savedCategory);

  categ.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const filterValue = btn.id;
      
      localStorage.setItem("selectedCategory", filterValue);
      applyFilter(filterValue);
    });
  });

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
    
    hiddentxt[index].classList.toggle("block")

    if (hiddentxt[index].classList.contains("block")) {
        btn.textContent = "close"
    } else {
        btn.textContent = "read more"
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

    const interval = setTimeout(() => {
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    }, 20)

  }))

  const leftbtn = document.querySelector(".left_button"),
        rightbtn = document.querySelector(".right_button"),
        cards = document.querySelector(".cards")

  const getCardWidth = () => {
    const card = cards.firstElementChild
    if (!card) return 0
    return card.getBoundingClientRect().width + 29
  }
  leftbtn.addEventListener("click", () => {
    if (timer) {
      clearTimeout(timer)
      cards.style.transition = "none"
      cards.style.transform = "translateX(0)"
      cards.appendChild(cards.firstElementChild)
      timer = null
    }

    const step = getCardWidth()
    
    cards.offsetHeight 

    cards.style.transition = "transform 0.2s ease"
    cards.style.transform = `translate(-${step}px, 0)`

    timer = setTimeout(() => {
      cards.style.transition = "none"
      cards.style.transform = "translateX(0)"
      cards.appendChild(cards.firstElementChild)
      timer = null
    }, 200)
  })

  rightbtn.addEventListener("click", () => {
    const step = getCardWidth()
    cards.style.transition = "none"
    cards.insertBefore(cards.lastElementChild, cards.firstElementChild)
    cards.style.transform = `translateX(-${step}px)`
    
    cards.offsetHeight 
    console.log(cards.offsetHeight)

    cards.style.transition = "transform 0.2s ease"
    cards.style.transform = "translateX(0)"
  })

  const parent = document.querySelector(".slider-logs")
  const txt = document.querySelector(".txt-logs")

  const texts = [
    "Malik Media",
    "Bcause.",
    "Wompily",
    "Deorham",
    "Ratings"
  ]

  let currentIndex = 0
  let interval

  const letsslider = () => {
    const card = parent.firstElementChild
    if (!card) return 0
    const style = window.getComputedStyle(parent)
    const gap = parseFloat(style.gap) || parseFloat(style.columnGap) || 0
    return card.getBoundingClientRect().width + gap
  }

  const dots = document.querySelectorAll(".dot")
  dots[0].classList.add("backred")

  const updateText = () => {
    currentIndex = (currentIndex + 1) % texts.length
    txt.textContent = texts[currentIndex]
    dots.forEach(btn => btn.classList.remove("backred"))
    if(dots[currentIndex]) dots[currentIndex].classList.add("backred")
  }

  dots.forEach((btn, index) => btn.addEventListener("click", (e) => {
    e.preventDefault()

    dots.forEach(joke => joke.classList.remove("backred"))

    btn.classList.add("backred")
    txt.textContent = texts[index]
    currentIndex = index
    
    stopSlider()
    startSlider()
  }))

  const nextSlide = () => {
    const step = letsslider()
    
    parent.style.transition = "transform 0.2s ease-in-out"
    parent.style.transform = `translateX(-${step}px)`

    const resetPosition = () => {
      parent.removeEventListener("transitionend", resetPosition)
      parent.style.transition = "none"
      
      parent.appendChild(parent.firstElementChild)
      
      parent.style.transform = "translateX(0)"
      
      updateText()
    }

    parent.addEventListener("transitionend", resetPosition)
  }

  const startSlider = () => {
    if (interval) clearInterval(interval)
    interval = setInterval(nextSlide, 2000)
  }

  const stopSlider = () => {
    clearInterval(interval)
  }

  parent.addEventListener("mouseenter", stopSlider)
  parent.addEventListener("mouseleave", startSlider)
  
  window.addEventListener("resize", () => {
      parent.style.transition = "none"
      parent.style.transform = "translateX(0)"
  })

  txt.textContent = texts[0]
  startSlider()

  const cart = document.querySelector(".casa"),
        div = document.querySelector(".popap"),
        inBlocks = document.querySelector(".inBlocks")

  cart.addEventListener("click", (e) => {
    e.preventDefault()
    div.classList.toggle("blick")
    confirm.style.display = "none"
  })

  const view = document.querySelectorAll(".sdsx")

  function newCard(product) {
    let basePrice = parseInt(product.price);
    let count = product.count || 1

    let x = document.createElement("div"),
        p = document.createElement("p"),
        img = document.createElement("img"),
        inX = document.createElement("div"),
        div = document.createElement("div"),
        but = document.createElement("button"),
        but2 = document.createElement("button"),
        p2 = document.createElement("p"),
        p3 = document.createElement("p"),
        delet = document.createElement("a"),
        deleteIcon = document.createElement("img")

    img.src = product.img
    x.classList.add("align-items")
    img.classList.add("schoolboy")
    p.classList.add("cance")
    p.innerHTML = product.title
    inX.appendChild(p3)
    inX.appendChild(div)
    div.appendChild(but)
    div.appendChild(p2)
    div.appendChild(but2)
    deleteIcon.src = "../img/delete.svg"
    delet.style.width = "50px"
    delet.href = "#"
    sdsx(delet)
    but.innerHTML = "-"
    but2.innerHTML = "+"
    div.style.borderRadius = "10px"
    div.style.border = "2px solid #dadada"
    div.style.display = "flex"
    div.style.justifyContent = "space-between"
    div.style.maxWidth = "100px"
    but.classList.add("but")
    but2.classList.add("but")
    but.style.borderRight = "1px solid #dadada"
    but2.style.borderLeft = "1px solid #dadada"
    but.style.borderRadius = "8px 0 0 8px"
    but2.style.borderRadius = "0 7px 7px 0"
    p2.classList.add("cance")
    p3.classList.add("cance")
    inX.classList.add("inx")
    
    p2.innerHTML = count

    const updateStorage = () => {
      let carj = JSON.parse(localStorage.getItem("carj")) || []
      let item = carj.find(i => i.title === product.title)
      if (item) {
        item.count = count
        localStorage.setItem("carj", JSON.stringify(carj))
      }
    }

    const updatePrice = () => {
      let total = basePrice * count 
      p3.innerHTML = "Price: " + total + "$ "
    }

    updatePrice()

    but.addEventListener("click", () => {
        count--
        if (count < 1) count = 1
        p2.innerHTML = count
        product.count = count
        updatePrice()
        updateStorage()
        updateSum()
    })

    but2.addEventListener("click", () => {
        count++
        if (count > 5) count = 5
        p2.innerHTML = count
        product.count = count
        updatePrice()
        updateStorage() 
        updateSum()
    })

    delet.addEventListener("click", (e) => {
      e.preventDefault()
      x.remove()
      let carj = JSON.parse(localStorage.getItem("carj")) || []
      let temp = []

      carj.forEach(item => {
          if (item.title !== product.title) {
              temp.push(item)
          }
      })

      localStorage.setItem("carj", JSON.stringify(temp))
      updateSum()
  })

    x.insertAdjacentElement("afterbegin", img)
    x.appendChild(inX)
    inX.insertAdjacentElement("afterbegin", p)
    x.insertAdjacentElement("beforeend", delet)
    delet.appendChild(deleteIcon)
    inBlocks.appendChild(x)
  }
  let savedCarj = JSON.parse(localStorage.getItem("carj")) || []
  savedCarj.forEach(product => {
      newCard(product)
  })
  view.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault()

    const card = btn.closest(".img")

    const joke = card.getBoundingClientRect(),
          jeko = cart.getBoundingClientRect()

    const val = card.querySelector("img"),
          clone = val.cloneNode(true)

    clone.style.width = "200px"
    clone.style.height = "200px"
    clone.style.zIndex = "9999"
    clone.style.position = "fixed"
    clone.style.top = joke.top + "px"
    clone.style.left = joke.left + "px"
    clone.style.pointerEvents = "none"
    clone.style.transition = "transform 1s ease-in-out"

    document.body.appendChild(clone)
    clone.style.transform = "translate(0, 0)"

    const dx = (jeko.left + jeko.width / 2) - (joke.left + 100)
    const dy = (jeko.top + jeko.height / 2) - (joke.top + 100)

    clone.getBoundingClientRect()
    
    clone.style.transform = `translate(${dx}px, ${dy}px) scale(0.2)`

    setTimeout(() => clone.remove(), 1200)

    const product = {
      title: card.querySelector(".name-item").innerHTML,
      img: card.querySelector("img").src ,
      price: "250",
      count: 1
    }

    let carj = JSON.parse(localStorage.getItem("carj")) || []

    let findElement = carj.find(item => item.title === product.title)

    if (findElement) {
      findElement.count = (findElement.count || 1) + 1
      if(findElement.count >= 5) {
        findElement.count = 5
      }
    } else {
      carj.push(product)
    }
    localStorage.setItem("carj", JSON.stringify(carj))
    inBlocks.innerHTML = "" 
    carj.forEach(item => {
        newCard(item)
    })
    updateSum()
  }))
  updateSum()

  const name = document.querySelector("#userName"),
        email = document.querySelector("#userMail"),
        subj = document.querySelector("#userSubject"),
        compName = document.querySelector("#companyName"),
        userMessage = document.querySelector("#userMessage"),
        buttonfor = document.querySelector(".vasya"),
        confirm = document.querySelector(".confirmBlock"),
        inf = document.querySelectorAll(".infs p")

  const nope = document.querySelector(".bad"),
        yes = document.querySelector(".cool")

  const pattern = /[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]+/

  const infoAgaing = () => {
    let info = JSON.parse(localStorage.getItem("info")) || []
    if (info.length > 0) {
      let infoIn = info[0]
      name.value = infoIn.name
      email.value = infoIn.mail
      subj.value = infoIn.subject
      compName.value = infoIn.company
      userMessage.value = infoIn.message
    }
    console.log(info)
  }

  const checkValue = () => {
    let whatfor = ""
    const agree = pattern.test(email.value)

    if (!name.value) {
      whatfor = "name"
    } else if (!email.value || !agree) {
      whatfor = "mail"
    } else if (!subj.value) {
      whatfor = "object"
    } else if (!compName.value) {
      whatfor = "company name"
    }

    if (whatfor) {
      alert("Enter the field " + whatfor)
      return false
    }
    return true
  }

  buttonfor.addEventListener("click", () => {
    if (checkValue()) {
      confirm.style.display = "flex"
      confirm.style.flexDirection = "column"
      confirm.style.justifyContent = "space-between"
      div.style.display = "none"

      const masBut = [name.value, email.value, subj.value, compName.value, userMessage.value]

      const imena = ["Name: ", "Email: ", "Subject: ", "Company Name: ", "Message: "]

      for (let i = 0; i < inf.length; i++) {
        if (masBut[i]) {
          inf[i].textContent = imena[i] + masBut[i]
        }
      }
    }
  })

  nope.addEventListener("click", () => {
    confirm.style.display = "none"
  })

  infoAgaing()

  const myForm = document.querySelector("form")

  yes.addEventListener("click", () => {
    let information = {
      name: name.value,
      mail: email.value,
      subject: subj.value,
      company: compName.value,
      message: userMessage.value
    }
    
    let info = JSON.parse(localStorage.getItem("info")) || []
    if(info) {
      info = []
      info.push(information)
      localStorage.setItem("info", JSON.stringify(info))
    }
    
    confirm.style.display = "none"
    alert("Ur information added to localStorage")

    const formData = new FormData(myForm)

    fetch("php/index.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .catch(error => {
        console.error("Error:", error)
        alert("Помилка JS: " + error)
    });
  })
});