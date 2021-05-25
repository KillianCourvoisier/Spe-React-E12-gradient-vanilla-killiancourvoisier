// == Imports
import store from './store';
import { generateSpanColor } from './utils';

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

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    const state = store.getState();

    store.dispatch({ type: 'changeFirstColor' });
    store.dispatch({ type: 'changeLastColor' });
    // data
    // state.nbColors += 2;
    // state.firstColor = randomHexColor();
    // state.lastColor = randomHexColor();
    // ui
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    const state = store.getState();
    console.log(state);
    const action = {
      type: 'changeFirstColor',
    };
    store.dispatch(action);
    // state.nbColors += 1;
    // state.firstColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    const state = store.getState();
    console.log(state);
    const action = {
      type: 'changeLastColor',
    };
    store.dispatch(action);
    // state.nbColors += 1;
    // state.firstColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    state.direction = '270deg';
    renderGradient();
    renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    state.direction = '90deg';
    renderGradient();
    renderColors();
  });
