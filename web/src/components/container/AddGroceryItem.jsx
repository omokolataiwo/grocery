import React from 'react';
import PropTypes from 'prop-types';
import TextInputField from './TextInputField';

const AddGroceryItem = ({
  grocery, errors, stopEditing, onChange, saveItem, isEditing
}) => (
  <div className="form-title">
    {!isEditing ? (
      <h3>Add New Item</h3>
    ) : (
      <h3>
        <span onClick={stopEditing} className="back-btn">
          {'<'}
        </span>

        <span className="label">Edit Item</span>
      </h3>
    )}
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

    <button type="button" className="btn btn-primary col-md-12" onClick={saveItem}>
      {!isEditing ? 'Add New Item' : 'Edit Item'}
    </button>
  </div>
);

AddGroceryItem.propTypes = {
  grocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.arrayOf(PropTypes.string),
    amount: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  saveItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddGroceryItem;
