import { createHeading, createP, createButton } from './helper';

function createHome() {
  const main = document.createElement('main');
  const mainImg = document.createElement('div');

  main.className = 'main';
  main.id = 'home-content';
  mainImg.className = 'img-main';
  mainImg.id = 'img-home';

  main.appendChild(mainImg);
  mainImg.appendChild(
    createHeading(`Artichoke Basille's Pizza`, 'home-heading', 'h1')
  );
  mainImg.appendChild(
    createP(
      `Pizzaiolos, cousins and best friends, Francis Garcia and Sal Basille,
  are two regular guys from the neighborhood, whose DNA reads garlic and
  oil. They are fourth generation restaurateurs.`,
      'home-text'
    )
  );
  mainImg.appendChild(createButton(`Order Now`, 'orderBtn'));
  return main;
}

export default createHome;
