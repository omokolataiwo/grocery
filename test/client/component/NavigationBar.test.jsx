import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../../../web/src/components/container/NavigationBar';

const wrapper = mount(<BrowserRouter><NavigationBar /></BrowserRouter>);

describe('NavigationBar Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
