import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// const Gradient = ({ direction, lastColor, firstColor }) => (
// <div id="gradient" style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }} />
// );
const Gradient = () => {
  const { direction, lastColor, firstColor } = useSelector((state) => state);
  return (
    <div id="gradient" style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }} />
  );
};
Gradient.propTypes = {
  direction: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  lastColor: PropTypes.string.isRequired,
};

export default Gradient;
