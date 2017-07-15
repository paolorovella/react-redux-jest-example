import { INCREMENT, DECREMENT } from 'src/constants';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
