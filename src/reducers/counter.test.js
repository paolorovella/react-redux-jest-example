import reducer from 'src/reducers/counter';
import { increment, decrement } from 'src/actions';

describe('counter reducer', () => {
  test('counter should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  test('counter/INCREMENT \'10\' to  \'11\'', () => {
    expect(reducer({ current: 10 }, increment())).toMatchSnapshot();
  });

  test('counter/DECREMENT \'5\' to  \'4\'', () => {
    expect(reducer({ current: 5 }, decrement())).toMatchSnapshot();
  });
});
