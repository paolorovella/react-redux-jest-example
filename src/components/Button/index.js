import styled from 'styled-components';
import theme from 'src/config/theme';

const Button = styled.button`
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

Button.defaultProps = {
  type: 'primary',
};

export default Button;
