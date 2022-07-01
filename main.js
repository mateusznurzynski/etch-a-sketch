const container = document.querySelector('.container');
const segment = document.createElement('div');
const form = document.querySelector('.grid-edit');
segment.classList.add('segment');
let segmentsNumber = 16;
let colorType;
segment.style.width = `calc(100%/${segmentsNumber})`;
segment.style.height = `calc(100%/${segmentsNumber})`;

form.addEventListener('submit', submitForm);

setGrid(segmentsNumber, 'black');

function setGrid(segmentsNumber, colorType) {
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
  paintSegments(colorType);
}

function submitForm(e) {
  e.preventDefault();
  const sizeNumberInput = document.querySelector('#size-number');
  const colorTypeInputs = document.querySelectorAll('.color-type');
  colorType = getCheckedValue(colorTypeInputs);
  console.log(colorType);
  setGrid(sizeNumberInput.value, colorType);
  clearInputs(sizeNumberInput);
}

function clearInputs(...inputs) {
  inputs.forEach((input) => {
    input.value = '';
  });
}

function paintSegments(colorType = 'black') {
  allSegments = document.querySelectorAll('.segment');
  allSegments.forEach((segment) => {
    segment.addEventListener('mouseenter', (e) => {
      e.currentTarget.style.backgroundColor = colorType;
    });
  });
  //   e.currentTarget.style.backgroundColor = type;
}

function getCheckedValue(inputs) {
  let checkedValue = 'black';
  inputs.forEach((input) => {
    if (input.checked) {
      checkedValue = input.value;
    }
  });
  return checkedValue;
}
