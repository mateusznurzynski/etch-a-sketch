const container = document.querySelector('.container');
const segment = document.createElement('div');
segment.classList.add('segment');
let segmentsNumber = 16;
segment.style.width = `calc(100%/${segmentsNumber})`;
segment.style.height = `calc(100%/${segmentsNumber})`;
segment.style.backgroundColor = 'green';

for (let i = 0; i < segmentsNumber ** 2; i++) {
  container.appendChild(segment.cloneNode(true));
}
