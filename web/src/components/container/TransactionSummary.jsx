import React from 'react';

const TransactionSummary = ({ items }) => {
  let totalSold = 0;
  let totalAmount = 0;

  items.forEach((item) => {
    if (item.purchased) {
      totalSold += 1;
      totalAmount += +item.amount;
    }
  });

  return (
    <p style={{ marginLeft: '65%' }}>
    Total Item
      {items.length > 1 && 's'}
      {' '}
sold:
      {' '}
      {totalSold}
      {' '}
Total Amount:
      {' '}
      {totalAmount}
    </p>
  );
};

TransactionSummary.propTypes = {};
export default TransactionSummary;
