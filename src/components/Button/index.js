import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'src/config/theme';

/**
 * Button component
 */
const StyledButton = styled.button`
  color: ${props => (
    theme.buttons[props.type].default ||
    theme.buttons.primary.default
  )};
  border: 2px solid ${props => (
    theme.buttons[props.type].default ||
    theme.buttons.primary.default
  )};
  background-color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${props => (
      theme.buttons[props.type].hover ||
      theme.buttons.primary.hover
    )};
    color: white;
    border: 2px solid ${props => (
      theme.buttons[props.type].hover ||
      theme.buttons.primary.hover
    )};
  }
`;

const Button = ({ ...props }) => (
  <StyledButton {...props}>{props.label}</StyledButton>
);

Button.defaultProps = {
  type: 'primary',
  label: 'Button',
};

Button.propTypes = {
  /** Button label */
  label: PropTypes.string,
  /** Button type (it can be 'success', 'danger' or 'primary') */
  type: PropTypes.string,
};

export default Button;

