// == Imports
import store from './store';
import { randomHexColor, generateSpanColor } from './utils';
import { changeFirstColor, changeLastColor, changeDirection } from './actions';

console.log(store);

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { direction, firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = direction === '90deg'
    ? `${firstSpan} → ${lastSpan}`
    : `${lastSpan} ← ${firstSpan}`;

  document.getElementById('colors').innerHTML = result;
}

const render = () => {
  renderNbColors();
  renderGradient();
  renderColors();
};

// == Initialisation
render();
store.subscribe(render);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch(changeFirstColor(randomHexColor()));
    store.dispatch(changeLastColor(randomHexColor()));
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const action = changeFirstColor(randomHexColor());
    store.dispatch(action);
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const action = changeLastColor(randomHexColor());
    store.dispatch(action);
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    const action = changeDirection('270deg');
    store.dispatch(action);
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    const action = changeDirection('90deg');
    store.dispatch(action);
  });
