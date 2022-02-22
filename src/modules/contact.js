import { createHeading, createP, createInput } from './helper';
import AddressImage from '../images/address.png';

function createContact() {
  const main = document.createElement('main');
  const mainImg = document.createElement('div');

  main.className = 'main';
  main.id = 'contact-content';
  mainImg.className = 'img-main';
  mainImg.id = 'img-contact';

  main.appendChild(mainImg);
  mainImg.appendChild(
    createHeading(`Let's get acquainted`, 'home-heading', 'h1')
  );

  main.appendChild(createContainer());
  return main;
}

function createContainer() {
  const container = document.createElement('div');
  container.id = 'contact';

  container.appendChild(createAddressSection());
  container.appendChild(createFormSection());

  return container;
}

function createAddressSection() {
  const section = document.createElement('div');
  const addressHeader = document.createElement('div');
  section.id = 'address-section';
  addressHeader.id = 'address-header';

  addressHeader.appendChild(createHeading('Address', 'address-heading', 'h2'));
  addressHeader.appendChild(document.createElement('hr'));
  section.appendChild(addressHeader);
  section.appendChild(
    createP('321 E 14th St, New York, NY 10003', 'contact-text')
  );
  section.appendChild(createMap());

  return section;
}

function createFormSection() {
  const form = document.createElement('div');
  const formHeader = document.createElement('div');
  form.id = 'form-section';
  formHeader.id = 'form-header';

  formHeader.appendChild(createHeading('Contact Form', 'form-heading', 'h2'));
  formHeader.appendChild(document.createElement('hr'));
  form.appendChild(formHeader);
  form.appendChild(createForm());

  return form;
}

function createMap() {
  const addressImg = new Image();
  addressImg.className = 'contact-address-img';
  addressImg.src = AddressImage;

  return addressImg;
}

function createForm() {
  const contactForm = document.createElement('div');
  const largeText = createInput('', 'contactInput', 'text');
  largeText.id = 'largeText';
  contactForm.id = 'contact-form';

  contactForm.appendChild(createP('Name', 'contactText'));
  contactForm.appendChild(createInput('', 'contactInput', 'text'));
  contactForm.appendChild(createP('Mail', 'contactText'));
  contactForm.appendChild(createInput('', 'contactInput', 'text'));
  contactForm.appendChild(createP('Message', 'contactText'));
  contactForm.appendChild(largeText);
  contactForm.appendChild(
    createInput('Send Message', 'contactSubmit', 'submit')
  );

  return contactForm;
}

export default createContact;
