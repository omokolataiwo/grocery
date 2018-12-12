import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroceryItems from '../container/GroceryItems';
import AddGroceryItem from '../container/AddGroceryItem';
import {
  getAllItems, addItem, updateItem, resetGroceryState
} from '../../actions/grocery';
import { ADD_NEW_ITEM_FAILURE } from '../../const';

class Shopping extends Component {
  // static propTypes = {
  //   groceries: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //   })).isRequired
  // }

  state = {
    grocery: {
      name: '',
      amount: 0
    },
    errors: {
      name: [],
      amount: []
    }
  };

  componentDidMount() {
    const { getAllItems } = this.props;
    getAllItems();
  }

  componentDidUpdate() {
    const { type, error, resetGroceryState } = this.props;

    if (type === ADD_NEW_ITEM_FAILURE) {
      this.setState({ errors: error });
      resetGroceryState();
    }
  }

  onFormFieldChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      grocery: { ...prevState.grocery, [name]: value }
    }));
  }

  onAddGrocery = (event) => {
    event.preventDefault();
    const { addItem, updateItem } = this.props;
    const { grocery, updating } = this.state;

    return !updating ? addItem(grocery) : updateItem(grocery);
  }

  render() {
    const { grocery, errors } = this.state;
    const { items } = this.props;

    return (
      <div>
        <h1>Grocery Listify</h1>
        <GroceryItems groceries={items || []} />
        <AddGroceryItem
          grocery={grocery}
          errors={errors}
          onChange={this.onFormFieldChange}
          addItem={this.onAddGrocery}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ grocery: { type, items, error } }) => ({ type, items, error });
export default connect(
  mapStateToProps,
  {
    getAllItems, addItem, updateItem, resetGroceryState
  }
)(Shopping);
