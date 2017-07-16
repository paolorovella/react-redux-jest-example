import React from 'react';
import { mount, shallow } from 'enzyme';
import logo from 'src/assets/logo.svg';

import Logo from '.';

test('<Logo /> mounts without crashing', () => {
  const tree = mount(
    <Logo src={logo} />,
  );
  expect(tree).toMatchSnapshot();
});

test('<Logo /> renders without crashing', () => {
  const tree = shallow(
    <Logo src={logo} />,
  );
  expect(tree).toMatchSnapshot();
});
