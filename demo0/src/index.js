// require('./main.css')
var sub = require('./sub')
require('./style-sheets/main.scss')

var app = document.createElement('div')

app.innerHTML='<h1>Hello world</h1>'
app.appendChild(sub())

document.body.appendChild(app)
