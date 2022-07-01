const container = document.querySelector('.container');
const segment = document.createElement('div');
segment.classList.add('segment');
let segmentsNumber = 16;

for (let i = 0; i < segmentsNumber ** 2; i++) {
  container.appendChild(segment.cloneNode(true));
}
