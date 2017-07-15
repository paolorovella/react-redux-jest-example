import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'src/actions';
import { Button, Counter, Logo } from 'src/components';

import logoImg from 'src/assets/logo.svg';

import {
  ButtonsContainer,
  CounterContainer,
  Container,
  H2,
} from './styles';

const App = ({ counter, increment, decrement }) => (
  <Container>
    <Logo src={logoImg} />
    <H2>React Redux Jest example</H2>
    <ButtonsContainer>
      <Button type="success" onClick={increment}>Increment</Button>
      <Button type="danger" onClick={decrement}>Decrement</Button>
    </ButtonsContainer>
    <CounterContainer>
      <Counter value={counter} />
    </CounterContainer>
  </Container>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(
  state => ({ counter: state.counter.current }),
  dispatch => ({ ...bindActionCreators(actions, dispatch) }),
)(App);
