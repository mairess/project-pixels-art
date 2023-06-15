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
const creatColor = (className) => {
  const newColor = document.createElement('li');
  newColor.className = className;
  return newColor;
};
// Add colors
const addColor = (parentElement, child) => parentElement.appendChild(child);

addColor(colorPalette, creatColor('color red'));
addColor(colorPalette, creatColor('color green'));
addColor(colorPalette, creatColor('color yellow'));
addColor(colorPalette, creatColor('color blue'));
