import React from 'react';
import renderer from 'react-test-renderer';
import logo from 'src/assets/logo.svg';

import Logo from '.';

it('<Logo /> renders without crashing', () => {
  const tree = renderer.create(
    <Logo src={logo} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
