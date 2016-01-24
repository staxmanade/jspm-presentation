
var notice_this_is_a_global_var = "WAT?";


window.getGlobalTemplate = function() {
  var compiled = _.template('<h1>Hello from a <strong>Global</strong> module running a <%= templateName %>!</h1>');
  return compiled({
     'templateName': 'Lodash template'
   });
};
