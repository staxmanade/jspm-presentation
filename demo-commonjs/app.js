
var _ = require('lodash');

var compiled = _.template('<h1>Hello from a <strong>CommonJS</strong> module loading a <%= templateName %>!</h1>');

var mainElement = document.getElementById('main');

mainElement.innerHTML = compiled({
  'templateName': 'Lodash template'
});
