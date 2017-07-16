import store from 'src/store';
import { increment, decrement } from './counter';

describe('Counter actions', () => {
  test('Counter increment action', () => {
    expect(store.dispatch(increment())).toMatchSnapshot();
  });

  test('Counter decrement action', () => {
    expect(store.dispatch(decrement())).toMatchSnapshot();
  });
});
