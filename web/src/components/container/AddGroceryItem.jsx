import React from 'react';
import PropTypes from 'prop-types';
import TextInputField from './TextInputField';

const AddGroceryItem = ({ grocery, errors, onChange }) => (
  <div>
    <TextInputField size={12} errors={errors.title} label="Item Name" placeholder="Eg: Bread" name="title" value={grocery.title} onChange={onChange} />

    <TextInputField size={12} errors={errors.amount} label="Amount" placeholder="Amount" name="amount" value={grocery.amount ? grocery.amount + '' : ''} onChange={onChange} />

    <button type="button" className="btn btn-primary">Add Item</button>
  </div>
);

AddGroceryItem.propTypes = {
  grocery: PropTypes.shape({
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    title: PropTypes.string,
  amount: PropTypes.string
  }).isRequired,
};

export default AddGroceryItem;
