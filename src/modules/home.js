import { createHeading, createP, createButton } from './helper';

function createHome() {
  const main = document.createElement('main');
  main.id = 'home-content';
  main.appendChild(
    createHeading(`Artichoke Basille's Pizza`, 'home-heading', 'h1')
  );
  main.appendChild(
    createP(
      `Pizzaiolos, cousins and best friends, Francis Garcia and Sal Basille,
  are two regular guys from the neighborhood, whose DNA reads garlic and
  oil. They are fourth generation restaurateurs.`,
      'home-text'
    )
  );
  main.appendChild(createButton(`Order Now`, 'orderBtn'));
  return main;
}

export default createHome;
