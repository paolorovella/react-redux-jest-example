import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from '.';

test('<Counter /> mounts without crashing', () => {
  const tree = mount(
    <Counter />,
  );
  expect(tree).toMatchSnapshot();
});

test('<Counter /> renders', () => {
  const tree = shallow(
    <Counter />,
  );
  expect(tree).toMatchSnapshot();
});

test('<Counter /> renders with value as prop', () => {
  const tree = shallow(
    <Counter value={30} />,
  );
  expect(tree).toMatchSnapshot();
});
