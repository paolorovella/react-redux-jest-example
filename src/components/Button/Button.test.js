import React from 'react';
import renderer from 'react-test-renderer';
import theme from 'src/config/theme';
import 'jest-styled-components';

import { Button } from 'src/components';

it('<Button /> (styled-component) renders without crashing', () => {
  const tree = renderer.create(
    <Button />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Button /> (styled-component) renders with type prop', () => {
  const tree = renderer.create(
    <Button type="success" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Button /> (styled-component) renders with type prop and match style rules', () => {
  const tree = renderer.create(
    <Button type="success" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', theme.buttons.success.default);
  expect(tree).toHaveStyleRule('border', `2px solid ${theme.buttons.success.default}`);
});
