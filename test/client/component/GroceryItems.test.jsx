import React from 'react';
import { mount } from 'enzyme';
import GroceryItems from '../../../web/src/components/container/GroceryItems';

const props = {
  groceries: [{
    _id: 'msken', name: 'Bread', amount: '', purchased: false
  }],
  errors: {},
  deleteItem: jest.fn(() => {}),
  startEditing: jest.fn(() => { }),
  toggleBuy: jest.fn(() => { })
};
const wrapper = mount(<GroceryItems {...props} />);

describe('AddGroceryItem Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
