import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ total }) => {
  const text = total > 1 ? 'couleurs générées' : 'couleur générée';
  return (
    <div id="nbColors">
      {total} {text}
    </div>
  );
};
Counter.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Counter;
