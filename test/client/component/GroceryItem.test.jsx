import React from 'react';
import { shallow } from 'enzyme';
import GroceryItem from '../../../web/src/components/container/GroceryItem';

const props = {
  grocery: {
    _id: 'msken',
    name: 'Bread',
    amount: '',
    purchased: false
  },
  errors: {},
  deleteItem: jest.fn(() => {}),
  startEditing: jest.fn(() => {}),
  toggleBuy: jest.fn(() => {})
};
const wrapper = shallow(<GroceryItem {...props} />);

describe('AddGroceryItem Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should buy item', () => {
    const btnBuy = wrapper.find('#buy-msken');
    btnBuy.simulate('click');
    btnBuy.simulate('keyup');
    expect(props.toggleBuy).toHaveBeenCalled();
  });

  it('should buy item', () => {
    const btnEdit = wrapper.find('#edit-msken');
    btnEdit.simulate('click');
    btnEdit.simulate('keyup');
    expect(props.startEditing).toHaveBeenCalled();
  });

  it('should delete item', () => {
    const btnDelete = wrapper.find('#delete-msken');
    btnDelete.simulate('click');
    btnDelete.simulate('keyup');
    expect(props.deleteItem).toHaveBeenCalled();
  });
});
