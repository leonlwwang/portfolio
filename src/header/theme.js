import { setBaseColor } from '/src/index/view/button'

const lightModeIcon = `
  <svg theme-btn id="dark-mode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Gradient definition -->
    <defs>
      <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF0000" /> <!-- Red -->
        <stop offset="30%" stop-color="#FF7F00" /> <!-- Orange -->
        <stop offset="45%" stop-color="#FFFF00" /> <!-- Yellow -->
        <stop offset="50%" stop-color="#00FF00" /> <!-- Green -->
        <stop offset="75%" stop-color="#0000FF" /> <!-- Blue -->
        <stop offset="90%" stop-color="#4B0082" /> <!-- Indigo -->
        <stop offset="100%" stop-color="#8B00FF" /> <!-- Violet -->
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#rainbowGradient)"></circle>
  </svg>
`

const darkModeIcon = `
  <svg theme-btn id="light-mode" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`

let dark = true   

const enableDarkMode = () => {
  const root = document.documentElement
  root.classList.add('dark')
}

const disableDarkMode = () => {
  const root = document.documentElement
  root.classList.remove('dark')
}

export const loadTheme = (gl, program) => {
  const colorLoc = gl.getUniformLocation(program, 'color')
  const theme = document.querySelector('div[theme]')
  gl.uniform4f(colorLoc, 0.0, 0.0, 0.0, 1.0)
  theme.addEventListener('click', () => {
    console.log(dark)
    if (dark) {
      theme.innerHTML = lightModeIcon
      enableDarkMode()
      setBaseColor()
      gl.uniform4f(colorLoc, 0.8, 0.8, 0.8, 1.0)
    } else {
      theme.innerHTML = darkModeIcon
      disableDarkMode()
      setBaseColor()
      gl.uniform4f(colorLoc, 0.0, 0.0, 0.0, 1.0)
    }
    dark = !dark
  })
}
