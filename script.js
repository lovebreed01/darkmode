var mode = 'light' 
var storage = window.localStorage;
// storage.setItem('mode', mode)
var myMode = storage.getItem('mode')
storage.setItem('mode', myMode)
mode = myMode
document.body.className = myMode
window.onload = () => {
  // if (storage.getItem('mode') == null) {
  //   storage.setItem('mode', 'light')
  // }
  let mode = storage.getItem('mode')
  let btn = document.querySelector('#changeBtn')

  console.log(mode === 'null',mode)
  if (mode === 'null') {
    storage.setItem('mode', 'light')
    location.reload()
    console.log('mode', mode)
  }
  else {
    mode = 'dark'
  }
 
 
}
let btn = document.querySelector('#changeBtn')

 mode === 'light' ? btn.textContent = 'Change to Dark' : btn.textContent = 'Change to Light'

btn.onclick = function(){
  if(mode === 'light'){
    mode = 'dark'
    storage.setItem('mode', 'dark')
    btn.textContent = 'Change to Light'
  }
  else if(mode === 'dark') {
    mode = 'light'
      storage.setItem('mode', 'light')
     btn.textContent = 'Change to Dark'
  }
  newMode = storage.getItem('mode')
  console.log(newMode)
  document.body.className = newMode
}