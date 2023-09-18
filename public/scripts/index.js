let currentUrl = window.location.href
let dropdown = document.querySelectorAll('.btn-drop')
let links = document.querySelectorAll('li a')

dropdown.forEach(drops => {
    drops.addEventListener('click', function() {
        let content = drops.nextElementSibling
        if (!content.classList.contains('closed')) {
            content.classList.add('closed')
        } else {
            content.classList.remove('closed')
        }
    })
})

for (let i = 0; i < links.length; i++) {
  if (links[i].href === currentUrl) {
    links[i].parentNode.parentNode.classList.remove('closed')
    console.log(links[i].parentNode.parentNode)
  }
  
}

// Title Script

let url = window.location.href
let segments = url.split("/")
let title = segments[segments.length-1]
document.querySelector("#title p").innerHTML = title


// Settings open close

let btnSettings = document.querySelector('#btnSettings')
let settings = document.querySelector('.settingsClosed')


btnSettings.addEventListener('click', () => {
  if (settings.classList.contains('settings')) {
    settings.classList.remove('settings')
    settings.classList.add('settingsClosed')
  } else {
    settings.classList.add('settings')
    settings.classList.remove('settingsClosed')
  }
})

// select theme

const themeSelect = document.querySelector('#theme-select')
themeSelect.selectedIndex = themeSelect.value
themeSelect.value = savedTheme

themeSelect.addEventListener('change', () => {
  html.classList.replace(html.className, themeSelect.value)
  localStorage.setItem('theme', themeSelect.value)
})
console.log(themeSelect.value)



//  Menu burger

let btnBurger = document.querySelector('#btnBurger')
let navBar = document.querySelector('.nav')
let content = document.querySelector('.content')
let menuTitle = document.querySelector('.menu-title')

btnBurger.addEventListener('click', () => {
  if (navBar.classList.contains('navClosed')) {
    navBar.classList.remove('navClosed')
    content.classList.remove('contentClosed')
    menuTitle.classList.remove('menu-titleClosed')
  } else {
    navBar.classList.add('navClosed')
    content.classList.add('contentClosed')
    menuTitle.classList.add('menu-titleClosed')
  }
})


// Print Button

let btnPrint = document.querySelector('#btnPrint')
btnPrint.addEventListener('click', () => {
  window.print()
})
console.log(btnPrint)



