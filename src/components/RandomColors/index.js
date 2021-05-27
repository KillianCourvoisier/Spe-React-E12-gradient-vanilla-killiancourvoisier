import React from 'react';
import PropTypes from 'prop-types';

const RandomColors = ({ randomFirstColor, randomLastColor }) => (
  <div className="buttons group">
    <button
      type="button"
      className="button"
      // onClick={randomFirstColor}
    >RandomFirst
    </button>
    <button
      type="button"
      className="button"
      // onClick={randomLastColor}
    >RandomLast
    </button>
  </div>
);

RandomColors.propTypes = {
  // randomFirstColor: PropTypes.func.isRequired,
  // randomLastColor: PropTypes.func.isRequired,
};

export default RandomColors;
