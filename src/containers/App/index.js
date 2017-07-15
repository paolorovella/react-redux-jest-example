import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/actions';
import { Counter, Logo } from 'src/components';

import logo from 'src/assets/logo.svg';
import { Container, H2 } from './styles';

const App = ({ counter, increment, decrement }) => (
  <Container>
    <Logo src={logo} />
    <H2>React Redux Jest Example</H2>
    <Counter
      decrement={decrement}
      increment={increment}
      value={counter}
    />
  </Container>
);

App.defaultProps = {
  counter: 0,
  decrement: () => {},
  increment: () => {},
};

App.propTypes = {
  counter: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default connect(
  state => ({ counter: state.counter.current }),
  dispatch => ({ ...bindActionCreators(actions, dispatch) }),
)(App);
