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
const creatSquares = (classNameToPass) => {
  const newSquare = document.createElement('li');
  newSquare.className = classNameToPass;
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
for (let j = 0; j < 25; j += 1) {
  addColor(pixelBoard, creatSquares('pixel'));
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

// 4 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores
const elements = document.querySelectorAll('.pixel');
for (let index = 0; index < elements.length; index += 1) {
  elements[index].addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    const computedStyle = getComputedStyle(selected);
    const evento = event;
    evento.target.style.backgroundColor = computedStyle.getPropertyValue('background-color');
  });
}

// 5 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco
const resetButton = document.createElement('button');
resetButton.id = 'clear-board';
resetButton.innerText = 'Limpar';
colorPalette.insertAdjacentElement('afterend', resetButton);

const reset = () => {
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].style.backgroundColor = 'white';
  }
};

resetButton.addEventListener('click', reset);

// 6 - Adicione um botão para gerar cores aleatórias para a paleta de cores
const randomColorButton = document.createElement('button');
randomColorButton.id = 'button-random-color';
randomColorButton.innerText = 'Cores aleatórias';
resetButton.insertAdjacentElement('afterend', randomColorButton);

const generateRandomColor = () => {
  const hexadecimals = 'ABCDEF0123456789';
  let color = '#';

  for (let i = 0; i < 3; i += 1) {
    color += hexadecimals[Math.ceil(Math.random() * 16)];
  }
  return color;
};

const SetRandomColor = () => {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = generateRandomColor();
  }
};

randomColorButton.addEventListener('click', SetRandomColor);
