import React from 'react';
import PropTypes from 'prop-types';

const RandomColors = ({ randFirst, randLast }) => (
  <div className="buttons group">
    <button
      type="button"
      className="button"
      onClick={randFirst}
    >RandomFirst
    </button>
    <button
      type="button"
      className="button"
      onClick={() => {
        randFirst();
        randLast();
      }}
    >RandomAll
    </button>
    <button
      type="button"
      className="button"
      onClick={randLast}
    >RandomLast
    </button>
  </div>
);

RandomColors.propTypes = {
  randFirst: PropTypes.func.isRequired,
  randLast: PropTypes.func.isRequired,
};

export default RandomColors;
