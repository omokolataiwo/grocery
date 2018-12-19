import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <div>
    <div className="jumbotron text-center">
      <h1>Grocery Listify</h1>
      <p>
Grocery Store Management Made easy with
        {' '}
        <FontAwesomeIcon icon="heart" />
      </p>
    </div>
    <div className="container home">
      <div className="row text-center">
        <div className="col-md-4">
          <FontAwesomeIcon icon="shopping-bag" />
          <h5>Shop</h5>
          <p>You can use the web app to add/remove item from a shopping experience.</p>
        </div>
        <div className="col-md-4">
          <FontAwesomeIcon icon="briefcase" />
          <h5>Manage Item</h5>
          <p>You can manage item you add. YOu can also delete an item with a very simple user experience.</p>
        </div>
        <div className="col-md-4">
          <FontAwesomeIcon icon="chart-line" />
          <h5>Transaction Summary</h5>
          <p>Transaction summary of item purchase can not be easier.</p>
        </div>
      </div>
    </div>
  </div>
);
