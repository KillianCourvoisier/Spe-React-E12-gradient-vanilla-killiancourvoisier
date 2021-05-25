// == Imports
import store from './store';
import { randomHexColor, generateSpanColor } from './utils';

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
    store.dispatch({ type: 'changeFirstColor', color: randomHexColor() });
    store.dispatch({ type: 'changeLastColor', color: randomHexColor() });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const action = {
      type: 'changeFirstColor',
      color: randomHexColor(),
    };
    store.dispatch(action);
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const action = {
      type: 'changeLastColor',
      color: randomHexColor(),
    };
    store.dispatch(action);
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    const action = { type: 'changeDirection', direction: '270deg' };
    store.dispatch(action);
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    const action = { type: 'changeDirection', direction: '90deg' };
    store.dispatch(action);
  });
