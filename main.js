const container = document.querySelector('.container');
const segment = document.createElement('div');
const form = document.querySelector('.grid-edit');
const COLOR_TEN_PERCENT = 255 / 10;
segment.classList.add('segment');
let segmentsNumber = 16;
let colorType = {
  value: 'black',
  mode: 'normal',
};
segment.style.width = `calc(100%/${segmentsNumber})`;
segment.style.height = `calc(100%/${segmentsNumber})`;

form.addEventListener('submit', submitForm);

setGrid(segmentsNumber, 'black');

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
  paintSegments();
}

function submitForm(e) {
  e.preventDefault();
  const sizeNumberInput = document.querySelector('#size-number');
  const colorTypeInputs = document.querySelectorAll('.color-type');
  setColorType(colorTypeInputs);
  console.log(colorType);
  setGrid(sizeNumberInput.value);
  clearInputs(sizeNumberInput);
}

function clearInputs(...inputs) {
  inputs.forEach((input) => {
    input.value = '';
  });
}

function paintSegments() {
  allSegments = document.querySelectorAll('.segment');
  if (colorType.mode === 'normal') {
    allSegments.forEach((segment) => {
      segment.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.backgroundColor = colorType.value;
      });
    });
  } else if (colorType.mode === 'rainbow') {
    allSegments.forEach((segment) => {
      segment.addEventListener('mouseenter', setRandomColor);
    });
  } else if (colorType.mode === 'darken') {
    allSegments.forEach((segment) => {
      segment.addEventListener('mouseenter', setDarkerColor);
    });
  }
}

function setDarkerColor(e) {
  const currentColor = getComputedStyle(e.currentTarget).backgroundColor;
  console.log(currentColor);
  const cleanValues = extractRgbValues(currentColor);
  const newValues = cleanValues.map((e) => {
    return e - COLOR_TEN_PERCENT;
  });
  e.currentTarget.style.backgroundColor = `rgb(${newValues[0]}, ${newValues[1]}, ${newValues[2]})`;
}

function extractRgbValues(rgbString) {
  if (typeof rgbString !== 'string') {
    return;
  }
  return rgbString.slice(4, rgbString.length - 1).split(', ');
}

function setRandomColor(e) {
  const randomColor = (colorType.value = `rgb(${getRandomNumber(
    255
  )}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`);
  colorType.value = randomColor;
  allSegments.forEach((segment) => {
    segment.addEventListener('mouseenter', (e) => {
      e.currentTarget.style.backgroundColor = colorType.value;
    });
  });
}

function getRandomNumber(max) {
  const output = Math.floor(Math.random() * max).toFixed(0);
  return output;
}

function setColorType(inputs) {
  let checkedValue = 'black';
  inputs.forEach((input) => {
    if (input.checked) {
      checkedValue = input.value;
    }
  });
  if (checkedValue === 'rainbow') {
    colorType.mode = checkedValue;
    return;
  }
  if (checkedValue === 'darken') {
    colorType.mode = checkedValue;
    return;
  }
  colorType.mode = 'normal';
  colorType.value = checkedValue;
}
