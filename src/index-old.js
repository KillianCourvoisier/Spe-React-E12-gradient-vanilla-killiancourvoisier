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

  let result;

  switch (direction) {
    case '45deg':
      result = `${firstSpan} &nearr; ${lastSpan}`;
      break;
    case '135deg':
      result = `${firstSpan} &searr; ${lastSpan}`;
      break;
    case '225deg':
      result = `${lastSpan} &swarr; ${firstSpan}`;
      break;
    case '270deg':
      result = `${lastSpan} &#8592; ${firstSpan}`;
      break;
    case '315deg':
      result = `${lastSpan} &nwarr; ${firstSpan}`;
      break;
    default:
      result = `${firstSpan} &#8594; ${lastSpan}`;
  }

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

document.getElementById('to45')
  .addEventListener('click', () => {
    const action = changeDirection('45deg');
    store.dispatch(action);
  });

document.getElementById('to135')
  .addEventListener('click', () => {
    const action = changeDirection('135deg');
    store.dispatch(action);
  });

document.getElementById('to225')
  .addEventListener('click', () => {
    const action = changeDirection('225deg');
    store.dispatch(action);
  });

document.getElementById('to315')
  .addEventListener('click', () => {
    const action = changeDirection('315deg');
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
