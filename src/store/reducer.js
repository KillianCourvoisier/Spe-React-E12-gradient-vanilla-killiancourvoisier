import { randomHexColor } from '../utils';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (stateActuel = initialState, action = {}) => {
  switch (action.type) {
    case 'changeLastColor':
      return {
        ...stateActuel,
        lastColor: randomHexColor(),
      };
    case 'changeFirstColor':
      return {
        ...stateActuel,
        firstColor: randomHexColor(),
      };
    default:
      return stateActuel;
  }
};

export default reducer;
