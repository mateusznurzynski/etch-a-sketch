const container = document.querySelector('.container');
const segment = document.createElement('div');
const form = document.querySelector('.grid-edit');
segment.classList.add('segment');
let segmentsNumber = 16;
segment.style.width = `calc(100%/${segmentsNumber})`;
segment.style.height = `calc(100%/${segmentsNumber})`;

form.addEventListener('submit', submitForm);

setGrid(segmentsNumber);

function setGrid(segmentsNumber) {
  if (segmentsNumber > 100) {
    alert('Maximum size of the grid is 100!');
    return;
  }
  let allSegments = document.querySelectorAll('.segment');
  allSegments.forEach((segment) => {
    segment.remove();
  });
  segment.style.width = `calc(100%/${segmentsNumber})`;
  segment.style.height = `calc(100%/${segmentsNumber})`;
  for (let i = 0; i < segmentsNumber ** 2; i++) {
    container.appendChild(segment.cloneNode(true));
  }
  allSegments = document.querySelectorAll('.segment');
  allSegments.forEach((segment) => {
    segment.addEventListener('mouseenter', paintSegment);
  });
}

function submitForm(e) {
  const sizeNumberInput = document.querySelector('#size-number');
  e.preventDefault();
  console.log(sizeNumberInput.value);
  setGrid(sizeNumberInput.value);
  clearInputs(sizeNumberInput);
}

function clearInputs(...inputs) {
  inputs.forEach((input) => {
    input.value = '';
  });
}

function paintSegment(e, type = 'black') {
  e.currentTarget.style.backgroundColor = type;
}
