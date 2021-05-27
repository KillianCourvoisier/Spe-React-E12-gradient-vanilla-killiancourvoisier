export const CHANGE_FIRST_COLOR = ' CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = ' CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION = ' CHANGE_DIRECTION';

export const changeFirstColor = (payload) => ({
  type: CHANGE_FIRST_COLOR,
  payload,
});

export const changeLastColor = (payload) => ({
  type: CHANGE_LAST_COLOR,
  payload,
});

export const changeDirection = (payload) => ({
  type: CHANGE_DIRECTION,
  payload,
});
