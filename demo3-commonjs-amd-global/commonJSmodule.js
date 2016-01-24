
var _ = require('lodash');

var compiled = _.template('<h1>Hello from a <strong>CommonJS</strong> module loading a <%= templateName %>!</h1>');

module.exports = {
  getTemplate: function(){
    return compiled({
       'templateName': 'Lodash template'
     });
  }
};
