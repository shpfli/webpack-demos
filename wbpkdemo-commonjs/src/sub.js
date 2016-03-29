require('./sub.css')
//这里使用CommonJS的风格
function generateText() {
  var element = document.createElement('h4');
  element.innerHTML = "Hello h4 world";
  return element;
}

module.exports = generateText;
