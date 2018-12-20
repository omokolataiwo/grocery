import React from 'react';
import { mount } from 'enzyme';
import AddGroceryItem from '../../../web/src/components/container/AddGroceryItem';

const props = {
  grocery: { name: '', amount: '', purchased: false },
  errors: {},
  saveItem: jest.fn(() => { }),
  onChange: jest.fn(() => { })
};
const wrapper = mount(<AddGroceryItem {...props} />);

describe('AddGroceryItem Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
