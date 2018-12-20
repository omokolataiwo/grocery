import React from 'react';
import PropTypes from 'prop-types';
import GroceryItem from './GroceryItem';

const GroceryItems = ({
  groceries, deleteItem, startEditing, toggleBuy
}) => (
  <div className="container">
    <div className="row">
      {groceries.map(grocery => (
        <GroceryItem
          key={grocery._id}
          grocery={grocery}
          startEditing={startEditing}
          deleteItem={deleteItem}
          toggleBuy={toggleBuy}
        />
      ))}
    </div>

  </div>);

GroceryItems.propTypes = {
  groceries: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired
    })
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired
};
export default GroceryItems;
