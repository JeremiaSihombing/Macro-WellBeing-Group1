import './kode_css_js/style.css'
import './kode_css_js/script.js'
import route from './router.js'

window.addEventListener('click', (e)=>{
  if (e.target.matches('a')){
  e.preventDefault()
  const path = e.target.getAttribute('href')
  document.querySelector('#app').innerHTML=route[path]
  history.pushState(null, null, path)
  }
})

window.addEventListener('popstate', ()=>{
  document.querySelector('#app').innerHTML=route[window.location.pathname]
})

window.addEventListener('load', ()=>{
  document.querySelector('#app').innerHTML=route[window.location.pathname]
})