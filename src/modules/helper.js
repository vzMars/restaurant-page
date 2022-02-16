function createHeading(text, className, tag) {
  const heading = document.createElement(tag);
  heading.className = className;
  heading.textContent = text;
  return heading;
}

function createP(text, className) {
  const p = document.createElement('p');
  p.className = className;
  p.textContent = text;
  return p;
}

function createButton(text, id) {
  const button = document.createElement('button');
  button.id = id;
  button.textContent = text;
  return button;
}

function createInput(text, id, inputType) {
  const input = document.createElement('input');
  input.id = id;
  input.type = inputType;
  if (inputType === 'submit') {
    input.value = text;
  } else if (inputType === 'text') {
    input.placeholder = text;
    input.name = 'mail';
  }
  return input;
}

export { createHeading, createP, createButton, createInput };
