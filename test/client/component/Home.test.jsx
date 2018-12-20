import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../web/src/components/pages/Home';

const wrapper = mount(<BrowserRouter><Home /></BrowserRouter>);

describe('Home Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
