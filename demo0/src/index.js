// require('./main.css')
var sub = require('./sub')
require('./style-sheets/main.scss')

var $ = require('jquery');
var moment = require('moment');

var app = document.createElement('div')

app.innerHTML = '<h1>Hello world</h1>'

document.body.appendChild(app)
app.appendChild(sub())

$('body').append('<p>Wow! now is ' + moment().format() + '</p>');
