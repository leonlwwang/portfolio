const lightModeIcon = `
  <svg id="svgContainer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
`

const darkModeIcon = `
  <svg id="svgContainer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`

let dark = false

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
    theme.innerHTML = dark ? lightModeIcon : darkModeIcon
    if (dark) {
      gl.uniform4f(colorLoc, 0.0, 0.0, 0.0, 1.0)
      theme.innerHTML = lightModeIcon
      disableDarkMode()
    } else {
      gl.uniform4f(colorLoc, 0.8, 0.8, 0.8, 1.0)
      theme.innerHTML = darkModeIcon
      enableDarkMode()
    }
    dark = !dark
  })  
}
