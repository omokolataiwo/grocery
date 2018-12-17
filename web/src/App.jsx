import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch, Route, Redirect, Link
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrash, faEdit, faCartPlus, faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import Groceries from './components/pages/Groceries';
import Signin from './components/pages/Signin';

library.add(faTrash, faEdit, faCartPlus, faShoppingCart);


class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to="/groceries">Groceries</Link>
          <Link to="/signin">Signout</Link>
        </nav>
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/groceries" component={Groceries} />
          <Redirect to="/signin" />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({}) => ({});
export default connect(
  mapStateToProps,
  {}
)(App);
