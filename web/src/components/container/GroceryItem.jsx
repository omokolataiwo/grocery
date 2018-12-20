import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Grocery = ({
  grocery, deleteItem, startEditing, toggleBuy
}) => (
  <div className="grocery-item col-md-4">
    <h2 className="title">{grocery.name}</h2>
    <p className="amount">
      &#8358;
      {grocery.amount}
    </p>

    <div className="control">
      <FontAwesomeIcon
        onClick={() => deleteItem(grocery._id)}
        onKeyUp={() => deleteItem(grocery._id)}
        role="button"
        tabIndex="-99999"
        icon="trash"
        id={`delete-${grocery._id}`}
        style={{ color: '#ff8f9a' }}
      />

      <FontAwesomeIcon
        onClick={() => startEditing(grocery)}
        onKeyUp={() => startEditing(grocery)}
        tabIndex="-199999"
        role="button"
        icon="edit"
        style={{ color: 'rgb(119, 172, 241)' }}
        id={`edit-${grocery._id}`}
      />

      <FontAwesomeIcon
        onClick={() => toggleBuy(grocery._id)}
        onKeyUp={() => toggleBuy(grocery._id)}
        tabIndex="-199999"
        role="button"
        id={`buy-${grocery._id}`}
        style={{ color: '#28a745' }}
        icon={grocery.purchased ? 'cart-plus' : 'shopping-cart'}
      />
    </div>
  </div>
);

Grocery.propTypes = {
  grocery: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired
  }).isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleBuy: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired
};

export default Grocery;
