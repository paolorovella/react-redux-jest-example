import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import store from 'src/store';
import App from '.';

it('<App /> renders without crashing', () => {
  const tree = renderer.create(
    <App store={store} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
