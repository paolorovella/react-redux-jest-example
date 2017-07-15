import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ label, value }) => <span>{label}: {value}</span>;

Counter.defaultProps = {
  label: 'Counter',
  value: 0,
};

Counter.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

export default Counter;
