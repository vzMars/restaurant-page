import createHeader from './header';
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';
import createContact from './contact';
import createFooter from './footer';

const content = document.getElementById('content');

content.addEventListener('click', (e) => {
  const link = e.target;
  const main = document.querySelector('.main');
  switch (link.id) {
    case 'Home':
      if (main.id === 'home-content') return;
      main.replaceWith(createHome());
      break;
    case 'Menu':
      if (main.id === 'menu-content') return;
      main.replaceWith(createMenu());
      break;
    case 'About':
      if (main.id === 'about-content') return;
      // main.replaceWith(createAbout());
      break;
    case 'Contact':
      if (main.id === 'contact-content') return;
      // main.replaceWith(createContact());
      break;
    default:
      console.log('nothing happens');
  }
});

function init() {
  content.appendChild(createHeader());
  content.appendChild(createHome());
  content.appendChild(createFooter());
}

export default init;
