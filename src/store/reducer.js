const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (stateActuel = initialState, action = {}) => {
  switch (action.type) {
    case 'changeDirection':
      return {
        ...stateActuel,
        direction: action.direction,
      };
    case 'changeLastColor':
      return {
        ...stateActuel,
        lastColor: action.color,
        nbColors: stateActuel.nbColors + 1,
      };
    case 'changeFirstColor':
      return {
        ...stateActuel,
        firstColor: action.color,
        nbColors: stateActuel.nbColors + 1,
      };
    default:
      return stateActuel;
  }
};

export default reducer;
