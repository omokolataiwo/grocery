import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import TextInputField from '../../../web/src/components/container/TextInputField';

const props = {
  errors: ['Name is required.'],
  label: 'Item Name',
  placeholder: 'Bread',
  name: 'name',
  value: '',
  size: 12,
  onChange: jest.fn(() => {})
};
const wrapper = mount(
  <BrowserRouter>
    <TextInputField {...props} />
  </BrowserRouter>
);

describe('NavigationBar Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
