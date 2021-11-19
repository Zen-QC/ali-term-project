import { KeyCodeMapTable } from '../keycode'
import { Sounds } from '../../sounds/index'

function FadeIn(elem, id) {
  let sound = new Sounds()
  const root = document.getElementById('root')
  const keyValue = KeyCodeMapTable.get(elem.keycode)
  let div = document.createElement('div')
  div.id = `${id}`
  div.value = elem.keycode
  div.style.position = 'fixed'
  div.style.height = elem.height
  div.style.width = elem.width
  div.style.color = 'black'
  div.style.textAlign = 'center'
  div.innerText = keyValue
  div.style.top = elem.top + '%'
  if (elem.right !== undefined) div.style.right = elem.right + '%'
  if (elem.left !== undefined) div.style.right = elem.left + '%'
  div.style.transform = 'translate(50%)'
  div.style.alignSelf = 'center'
  div.style.backgroundColor = '#fff'
  div.style.backgroundImage = 'none'
  div.style.backgroundPosition = '0 90%'
  div.style.backgroundRepeat = 'repeat no-repeat'
  div.style.backgroundSize = '4px 3px'
  div.style.borderRadius = '15px 225px 255px 15px 15px 255px 225px 15px'
  div.style.borderStyle = 'solid'
  div.style.borderWidth = '2px'
  div.style.boxSizing = 'border-box'
  div.style.display = 'inline-block'
  div.style.fontFamily = 'Neucha, sans-serif'
  div.style.fontSize = '1rem'
  div.style.lineHeight = '23px'
  div.style.padding = '.75rem'
  div.style.textDecoration = 'none'
  div.style.transition = 'all 235ms ease-in-out'
  div.style.borderBottomLeftRadius = '15px 255px'
  div.style.borderBottomRightRadius = '225px 15px'
  div.style.borderTopLeftRadius = '255px 15px'
  div.style.borderTopRightRadius = '15px 225px'
  div.style.opacity = 0
  div.style.visibility = 'hidden'
  div.style.transition = 'all .2s linear'
  div.style.opacity = 1
  div.style.visibility = 'visible'
  root.appendChild(div)
  setTimeout(() => {
    let isExsit = document.getElementById(id)
    if (isExsit) {
      sound.playFailure()
      FadeOut(id, 1)
    }
  }, 5000)
}

function FadeOut(id) {
  let root = document.getElementById('root')
  let dom = document.getElementById(id)
  dom.style.opacity = 0
  setTimeout(() => {
    root.removeChild(dom)
  }, 500)
}

export { FadeIn, FadeOut }