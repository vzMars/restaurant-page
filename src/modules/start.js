import createHeader from './header';
import createHome from './home';
import createFooter from './footer';

const content = document.getElementById('content');

function init() {
  content.appendChild(createHeader());
  content.appendChild(createHome());
  content.appendChild(createFooter());
}

export default init;
