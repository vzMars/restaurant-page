import { createHeading, createP, createInput } from './helper';

function createFooter() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.appendChild(createWrapper());
  return footer;
}

function createWrapper() {
  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  wrapper.appendChild(createFooterItems());

  return wrapper;
}

function createFooterItems() {
  const footerHeadings = [`Artichoke Basille's Pizza`, 'Contact', 'Subscribe'];
  const contactDetails = [
    'Phone: (212) 228-2004',
    'Hours: Everyday from 11AM-5AM',
    'Address: 321 E 14th St, New York, NY 10003',
  ];
  const footerItems = document.createElement('div');
  footerItems.id = 'footer-items';
  for (let i = 0; i < 3; i++) {
    const section = document.createElement('section');
    section.className = 'footer-section';
    section.appendChild(
      createHeading(footerHeadings[i], 'footer-heading', 'h3')
    );
    if (i === 0) {
      section.appendChild(
        createP(
          `Their never-ending line of devoted Artichoke Pizza fans include
          many celebrities, but most importantly, it draws from legions of
          native New Yorkers.`,
          'footer-text'
        )
      );
    } else if (i === 1) {
      contactDetails.forEach((element) =>
        section.appendChild(createP(element, 'footer-text'))
      );
    } else {
      section.appendChild(createInput('Email address', 'emailInput', 'text'));
      section.appendChild(createInput('Subscribe', 'emailSubmit', 'submit'));
    }

    footerItems.appendChild(section);
  }

  return footerItems;
}

export default createFooter;
