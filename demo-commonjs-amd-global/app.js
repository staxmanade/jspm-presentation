
import commonJSmodule from './commonJSmodule';
import amdModule from './amdModule';
import globalModule from './globalModule';

var mainElement = document.getElementById('main');
var separator = '<br> <h1>and also</h1> <br>';

mainElement.innerHTML = `
  ${commonJSmodule.getTemplate()}
  <br>
  <h1>and also</h1>
  <br>
  ${amdModule.getTemplate()}
  <br>
  <h1>and also</h1>
  <br>
  ${globalModule.getGlobalTemplate()}
`;
