import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Switch, Route, Redirect
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTrash, faEdit, faCartPlus, faShoppingCart, faShoppingBag, faBriefcase, faChartLine, faHeart
} from '@fortawesome/free-solid-svg-icons';
import Groceries from './components/pages/Groceries';
import Home from './components/pages/Home';
import NavigationBar from './components/container/NavigationBar';

library.add(faTrash, faEdit, faCartPlus, faShoppingCart, faBriefcase, faShoppingBag, faChartLine, faHeart);

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/groceries" component={Groceries} />
          <Redirect to="/home" />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = () => ({});
export default connect(
  mapStateToProps,
  {}
)(App);
