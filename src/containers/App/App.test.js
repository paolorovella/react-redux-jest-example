import React from 'react';
import { mount, shallow } from 'enzyme';
import store from 'src/store';
import App from '.';

test('<App /> mounts without crashing', () => {
  const wrapper = mount(
    <App store={store} />,
  );
  expect(wrapper).toMatchSnapshot();
});

test('<App /> renders', () => {
  const wrapper = shallow(
    <App store={store} />,
  );
  expect(wrapper).toMatchSnapshot();
});
