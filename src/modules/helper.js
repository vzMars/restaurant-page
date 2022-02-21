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

function createButton(text, className) {
  const button = document.createElement('button');
  button.className = className;
  button.textContent = text;
  return button;
}

function createSpan(text, className) {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = text;
  return span;
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

export { createHeading, createP, createButton, createInput, createSpan };
