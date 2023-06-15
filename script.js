// O título deverá ficar dentro de uma tag h1 com o id denominado title;
// O texto do título deve ser exatamente "Paleta de Cores".
const title = document.createElement('h1');
const parent = document.querySelector('body');
title.classList.add('title');
title.innerText = 'Paleta de Cores';
parent.appendChild(title);
