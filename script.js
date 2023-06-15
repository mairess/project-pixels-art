// O título deverá ficar dentro de uma tag h1 com o id denominado title;
// O texto do título deve ser exatamente "Paleta de Cores".
const title = document.createElement('h1');
const parent = document.querySelector('body');
title.id = 'title';
title.innerText = 'Paleta de Cores';
parent.appendChild(title);
// A paleta de cores deve ser um elemento com id denominado color-palette, e cada cor individual contida na paleta de cores deve possuir a classe chamada color;
const colorPalette = document.createElement('ul');
colorPalette.id = 'color-palette';
parent.appendChild(colorPalette);
//  Create colors
const creatSquares = (className) => {
  const newSquare = document.createElement('li');
  newSquare.className = className;
  return newSquare;
};
// Add squares of palette colors
const addColor = (parentElement, child) => parentElement.appendChild(child);
addColor(colorPalette, creatSquares('color red selected'));
addColor(colorPalette, creatSquares('color green'));
addColor(colorPalette, creatSquares('color yellow'));
addColor(colorPalette, creatSquares('color blue'));
// Create pixels board
const pixelBoard = document.createElement('section');
pixelBoard.id = 'pixel-board';
parent.appendChild(pixelBoard);

// Create the board
for (let i = 0; i < 5; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    addColor(pixelBoard, creatSquares('pixel'));
  }
}
// 3 - Crie uma função para selecionar uma cor na paleta de cores
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

const selectColor = (event) => {
  const element = document.querySelector('.selected');
  element.classList.remove('selected');
  event.target.classList.add('selected');
};

red.addEventListener('click', selectColor);
green.addEventListener('click', selectColor);
yellow.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
