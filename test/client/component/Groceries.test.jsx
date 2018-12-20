import React from 'react';
import { shallow } from 'enzyme';
import { Groceries } from '../../../web/src/components/pages/Groceries';
import { ADD_NEW_ITEM_FAILURE, RESET_GROCERY_STATE } from '../../../web/src/const';

const props = {
  getAllItems: jest.fn(() => {}),
  resetGroceryState: jest.fn(() => {}),
  deleteItem: jest.fn(() => {}),
  addItem: jest.fn(() => {}),
  toggleBuy: jest.fn(() => {}),
  updateItem: jest.fn(() => {}),
  items: [
    {
      _id: 'msken',
      name: 'Milk',
      amount: '700',
      purchased: true
    },
    {
      _id: 'bken',
      name: 'Bread',
      amount: '300',
      purchased: false
    }
  ]
};
const wrapper = shallow(<Groceries {...props} />);

describe('Groceries Component', () => {
  it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when form field change', () => {
    const instance = wrapper.instance();
    instance.onFormFieldChange({ target: { name: 'name', value: 'Milk' } });
    instance.onFormFieldChange({ target: { name: 'amount', value: '300' } });
    expect(wrapper.state('grocery').name).toEqual('Milk');
    expect(wrapper.state('grocery').amount).toEqual('300');
  });

  it('should delete item', () => {
    const instance = wrapper.instance();
    instance.onDeleteItem(props.items[0]._id);
    expect(props.deleteItem).toHaveBeenCalledWith('msken');
  });

  it('should add item', () => {
    const instance = wrapper.instance();
    instance.onAddGrocery({ preventDefault: () => {} });
    expect(props.addItem).toHaveBeenCalledWith({ name: 'Milk', amount: '300', purchased: false });
  });

  it('should update item', () => {
    const instance = wrapper.instance();

    instance.onStartEditing({ name: 'Milk', amount: '300', purchased: false });
    instance.onAddGrocery({ preventDefault: () => {} });
    expect(props.updateItem).toHaveBeenCalledWith({
      name: 'Milk',
      amount: '300',
      purchased: false
    });
  });

  it('should clear item when back button is clicked', () => {
    const instance = wrapper.instance();

    instance.onStopEditing();
    expect(wrapper.state('grocery').name).toEqual('');
    expect(wrapper.state('isEditting')).toBeFalsy();
  });

  it('should buy and unbuy', () => {
    const instance = wrapper.instance();

    instance.toggleBuy('msken');
    expect(props.toggleBuy).toHaveBeenCalledWith('msken');
  });
});
