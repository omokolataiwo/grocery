import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../../../web/src/App';

const wrapper = shallow(
  <App />
);

describe('App Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
