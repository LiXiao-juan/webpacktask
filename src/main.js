import './banner.js'
import './tabs.js'

import $ from 'jquery'

// import './styles/index.css'
import './styles/index.less'

// 引入字体图标文件
import './assets/fonts/iconfont.css'

import imgUrl from './assets/1.gif'
const theImg = document.createElement('img')
theImg.src = imgUrl
document.body.appendChild(theImg)

class App {
  static a = 123
}
const fn = () => {
  console.log(123)
}
fn()
console.log(App.a)
