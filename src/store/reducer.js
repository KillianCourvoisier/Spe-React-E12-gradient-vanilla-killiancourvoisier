import { CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR, CHANGE_DIRECTION } from '../actions';

const initialState = {
  firstColor: '#f0f',
  lastColor: '#ff0',
  direction: '45deg',
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
