import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import theme from 'src/config/theme';
import 'jest-styled-components';

import { Button } from 'src/components';

test('<Button /> (styled-component) mounts without crashing', () => {
  const wrapper = mount(
    <Button />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('<Button /> (styled-component) renders', () => {
  const wrapper = shallow(
    <Button />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('<Button /> (styled-component) renders with type prop', () => {
  const wrapper = shallow(
    <Button type="success" />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('<Button /> (styled-component) renders with type prop and match style rules', () => {
  const wrapper = renderer.create(
    <Button type="success" />,
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule('color', theme.buttons.success.default);
  expect(wrapper).toHaveStyleRule('border', `2px solid ${theme.buttons.success.default}`);
});
