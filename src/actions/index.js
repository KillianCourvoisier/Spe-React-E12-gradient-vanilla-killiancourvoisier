export const CHANGE_FIRST_COLOR = ' CHANGE_FIRST_COLOR';
export const CHANGE_LAST_COLOR = ' CHANGE_LAST_COLOR';
export const CHANGE_DIRECTION = ' CHANGE_DIRECTION';

export const changeFirstColor = (color) => ({
  type: CHANGE_FIRST_COLOR,
  color,
});

export const changeLastColor = (color) => ({
  type: CHANGE_LAST_COLOR,
  color,
});

export const changeDirection = (direction) => ({
  type: CHANGE_DIRECTION,
  direction,
});
