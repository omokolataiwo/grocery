import React from 'react';
import PropTypes from 'prop-types';
import TextInputField from './TextInputField';

const AddGroceryItem = ({
  grocery, errors, onChange, addItem
}) => (
  <div>
    <TextInputField
      size={12}
      errors={errors.name}
      label="Item Name"
      placeholder="Eg: Bread"
      name="name"
      value={grocery.name}
      onChange={onChange}
    />

    <TextInputField
      size={12}
      errors={errors.amount}
      label="Amount"
      placeholder="Amount"
      name="amount"
      value={grocery.amount ? `${grocery.amount}` : ''}
      onChange={onChange}
    />

    <button type="button" className="btn btn-primary" onClick={addItem}>
      Add Item
    </button>
  </div>
);

AddGroceryItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.arrayOf(PropTypes.string),
    amount: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddGroceryItem;
