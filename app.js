import './style.sass'

const url = document.getElementById('url')
const text = document.getElementById('text')
const submit = document.getElementById('submit')
const openUrlPreview = document.getElementById('openUrl')

const d = new Date()
const title = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
const time = d.getHours() + ':' + d.getMinutes()

const openUrl = () => {
  return `${url.value}${title}?body=${encodeURIComponent(time + '\n' + text.value + '\n')}` // TODO ``と''をリファクタリング
}

const updatePreview = () => {
  openUrlPreview.innerText = openUrl()
}

const open = () => {
  console.log('pushed')
  window.open(openUrl())
}

url.addEventListener('input', updatePreview)
text.addEventListener('input', updatePreview)
submit.addEventListener('click', open)
