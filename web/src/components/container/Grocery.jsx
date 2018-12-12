import React from 'react';
import PropTypes from 'prop-types';

const Grocery = ({ grocery }) => (
  <div className="grocery-item">
    <span className="title">{grocery.name}</span>
    <span className="amount">{grocery.amount}</span>
    <span>Buy/Unbuy</span>
  </div>
);

Grocery.propTypes = {
  grocery: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired
};

export default Grocery;
