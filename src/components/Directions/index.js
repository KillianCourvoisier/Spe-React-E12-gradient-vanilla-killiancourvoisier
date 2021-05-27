import React from 'react';
import PropTypes from 'prop-types';

const Directions = ({ onButtonClick }) => (
  <div className="buttons group">
    <button
      onClick={() => {
        onButtonClick('270deg');
      }}
      type="button"
      className="button"
    >
      to Left
    </button>
    <button
      onClick={() => {
        onButtonClick('90deg');
      }}
      type="button"
      className="button"
    >
      to Right
    </button>
  </div>

);

Directions.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Directions;
