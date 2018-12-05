import './style-sheets/main.scss'
import generateText from './sub'
import $ from 'jquery'
import moment from 'moment'

let app = document.createElement('div')

const myPromise = Promise.resolve(99)
myPromise.then((number) => {
  $('body').append('<div><p>promise result is ' + number + ' now is ' + moment().format() + '</p></div>')
})

app.innerHTML='<h1>Hello World, this is h1!</h1>'

document.body.appendChild(app)
app.appendChild(generateText());
