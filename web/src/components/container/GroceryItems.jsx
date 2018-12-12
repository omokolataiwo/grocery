import React from 'react';
import PropTypes from 'prop-types';
import Grocery from './Grocery';

const GroceryItem = ({ groceries }) => (
  <div>
    {groceries.map(grocery => (
      <Grocery key={grocery._id} grocery={grocery} />
    ))}
  </div>
);

GroceryItem.propTypes = {
  groceries: PropTypes.arrayOf(PropTypes.shape(
    {
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    }
  )).isRequired
};
export default GroceryItem;
