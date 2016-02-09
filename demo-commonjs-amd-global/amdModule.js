
define(['lodash'], function(_){

  var compiled = _.template('<h1>Hello from an <strong>AMD</strong> module running a <%= templateName %>!</h1>');

  return {
    getTemplate: function(){
      return compiled({
         'templateName': 'Lodash template'
       });
    }
  };

});
