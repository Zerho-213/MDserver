// Get Local Storage / push theme
const savedTheme = localStorage.getItem('theme')
const html = document.querySelector('html')
html.classList = ''
html.classList.add(savedTheme)
