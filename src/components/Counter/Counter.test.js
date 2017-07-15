import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '.';

it('<Counter /> renders without crashing', () => {
  const tree = renderer.create(
    <Counter />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Counter /> renders with label as prop', () => {
  const tree = renderer.create(
    <Counter label="Counter" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Counter /> renders with value as prop', () => {
  const tree = renderer.create(
    <Counter value={30} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
