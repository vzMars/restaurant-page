import { createHeading, createP, createButton, createSpan } from './helper';
import MenuItem1 from '../images/1arti.png';
import MenuItem2 from '../images/2crab.png';
import MenuItem3 from '../images/3marg.png';
import MenuItem4 from '../images/4vodka.png';
import MenuItem5 from '../images/5staten.png';
import MenuItem6 from '../images/6sici.png';
import MenuItem7 from '../images/7pep.png';
import MenuItem8 from '../images/8meat.png';

function createMenu() {
  const main = document.createElement('main');
  const mainImg = document.createElement('div');

  main.className = 'main';
  main.id = 'menu-content';
  mainImg.className = 'img-main';
  mainImg.id = 'img-menu';

  main.appendChild(mainImg);
  mainImg.appendChild(createHeading(`Pizza`, 'home-heading', 'h1'));

  main.appendChild(createContainer());
  return main;
}

function createContainer() {
  const container = document.createElement('div');
  container.id = 'menu';

  container.appendChild(createMenuHeader());
  container.appendChild(createMenuItems());
  container.appendChild(createButton('See More', 'menu-btn-more'));

  return container;
}

function createMenuHeader() {
  const menuHeader = document.createElement('div');
  menuHeader.id = 'menu-header';

  menuHeader.appendChild(createHeading('Our Menu', 'menu-heading', 'h2'));
  menuHeader.appendChild(
    createP(
      'Pizza is one of the most wholesome foods that man can eat. In fact, people have been eating pizza throughout human history.',
      'menu-text'
    )
  );
  menuHeader.appendChild(document.createElement('hr'));

  return menuHeader;
}

function createMenuItems() {
  const items = getItems();
  console.log(items);
  const menuItems = document.createElement('div');
  menuItems.id = 'menu-items';

  for (let i = 0; i < items.length; i++) {
    menuItems.appendChild(createMenuItem(items[i]));
  }
  return menuItems;
}

function createMenuItem(newItem) {
  const menuItem = document.createElement('div');
  const menuItemInfo = document.createElement('div');
  const menuItemTop = document.createElement('div');
  menuItem.className = 'menu-item';
  menuItemInfo.className = 'menu-item-info';
  menuItemTop.className = 'menu-item-top';
  console.log(newItem);

  const itemImg = new Image();
  itemImg.className = 'menu-item-img';
  itemImg.src = newItem.src;

  menuItem.appendChild(itemImg);

  menuItemTop.appendChild(createSpan(newItem.name, 'menu-item-heading'));
  menuItemTop.appendChild(createSpan(newItem.price, 'menu-item-price'));
  menuItemInfo.appendChild(menuItemTop);

  menuItemInfo.appendChild(createP(newItem.description, 'menu-item-text'));
  menuItemInfo.appendChild(createButton('Order now', 'menu-item-btn'));
  menuItem.appendChild(menuItemInfo);

  return menuItem;
}

function getItems() {
  const items = [
    {
      name: 'Artichoke',
      price: '$4.25',
      description:
        'Spinach cream sauce with artichoke hearts and a blend of cheeses.',
      src: MenuItem1,
    },
    {
      name: 'Crab',
      price: '$4.00',
      description:
        'Surimi crab stuffing with lobster sauce and fresh mozzarella cheese.',
      src: MenuItem2,
    },
    {
      name: 'Margherita',
      price: '$4.00',
      description:
        'Plum tomato sauce with a blend of cheeses, fresh mozzarella, and basil.',
      src: MenuItem3,
    },
    {
      name: 'Vodka',
      price: '$4.00',
      description:
        'Creamy vodka tomato sauce with a blend of cheeses on a twice baked crust.',
      src: MenuItem4,
    },
    {
      name: 'Staten Island',
      price: '$4.00',
      description:
        'Cooked tomato sauce with a blend of cheeses, red onion, and homemade meatballs.',
      src: MenuItem5,
    },
    {
      name: 'Sicilian',
      price: '$4.00',
      description:
        'Plum tomato sauce with a blend of cheeses, fresh basil, and olive oil on a twice baked crust.',
      src: MenuItem6,
    },
    {
      name: 'Pepperoni',
      price: '$4.00',
      description:
        'Plum tomato sauce with a blend of cheeses and hand-cut thick pepperoni.',
      src: MenuItem7,
    },
    {
      name: 'Meatball',
      price: '$4.00',
      description:
        'Cooked tomato sauce with a blend of cheeses and homemade meatballs.',
      src: MenuItem8,
    },
  ];

  return items;
}

export default createMenu;
