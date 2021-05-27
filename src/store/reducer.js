import { CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR, CHANGE_DIRECTION } from '../actions';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (stateActuel = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DIRECTION:
      return {
        ...stateActuel,
        direction: action.payload,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...stateActuel,
        lastColor: action.payload,
        nbColors: stateActuel.nbColors + 1,
      };
    case CHANGE_FIRST_COLOR:
      return {
        ...stateActuel,
        firstColor: action.payload,
        nbColors: stateActuel.nbColors + 1,
      };
    default:
      return stateActuel;
  }
};

export default reducer;
