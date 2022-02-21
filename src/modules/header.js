import Logo from '../images/logo.png';

function createHeader() {
  const header = document.createElement('header');

  header.appendChild(createNavbar());

  return header;
}

function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';

  navbar.appendChild(createLogo());
  navbar.appendChild(createLinks());

  return navbar;
}

function createLogo() {
  const logo = new Image();
  logo.id = 'restaurant-logo';
  logo.src = Logo;

  return logo;
}

function createLinks() {
  const navLinks = ['Home', 'Menu', 'About', 'Contact'];
  const links = document.createElement('ul');
  links.className = 'links';
  for (let i = 0; i < navLinks.length; i++) {
    const linkItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = navLinks[i];
    link.id = navLinks[i];
    linkItem.appendChild(link);
    links.appendChild(linkItem);
  }
  return links;
}

export default createHeader;
