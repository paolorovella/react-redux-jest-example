import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'src/components';

import {
  ButtonsContainer,
  CounterContainer,
} from './styles';

const Counter = ({ increment, decrement, value }) => (
  <div>
    <ButtonsContainer>
      <Button
        label="Decrement"
        type="danger"
        onClick={decrement}
      />
      <Button
        label="Increment"
        type="success"
        onClick={increment}
      />
    </ButtonsContainer>
    <CounterContainer>
      <span>Counter: {value}</span>
    </CounterContainer>
  </div>
);

Counter.defaultProps = {
  decrement: () => {},
  increment: () => {},
  value: 0,
};

Counter.propTypes = {
  /** Counter decrement funcion */
  decrement: PropTypes.func,
  /** Counter increment funcion */
  increment: PropTypes.func,
  /** Counter value **/
  value: PropTypes.number,
};

export default Counter;
