import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroceryItems from '../container/GroceryItems';
import AddGroceryItem from '../container/AddGroceryItem';
import TransactionSummary from '../container/TransactionSummary';
import {
  getAllItems,
  addItem,
  updateItem,
  resetGroceryState,
  deleteItem,
  toggleBuy
} from '../../actions/grocery';
import { ADD_NEW_ITEM_FAILURE, ADD_NEW_ITEM } from '../../const';

class Groceries extends Component {
  // static propTypes = {
  //   groceries: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //   })).isRequired
  // }

  defaultGrocery = { name: '', amount: '', purchased: false };

  defaultErrors = { name: [], amount: [] };

  state = {
    grocery: { ...this.defaultGrocery },
    errors: this.defaultErrors,
    isEditing: false
  };

  componentDidMount() {
    const { getAllItems } = this.props;
    getAllItems();
  }

  componentDidUpdate() {
    const { type, error, resetGroceryState } = this.props;

    if (type === ADD_NEW_ITEM_FAILURE) {
      this.setState({ errors: error }, resetGroceryState);
    }

    if (type === ADD_NEW_ITEM) {
      this.setState(() => ({ grocery: this.defaultGrocery }), resetGroceryState);
    }
  }

  onFormFieldChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      grocery: { ...prevState.grocery, [name]: value }
    }));
  };

  onDeleteItem = (itemId) => {
    const { deleteItem } = this.props;
    deleteItem(itemId);
  };

  onAddGrocery = (event) => {
    event.preventDefault();
    const { addItem, updateItem } = this.props;
    const { grocery, isEditing } = this.state;

    return !isEditing ? addItem(grocery) : updateItem(grocery);
  };

  onStartEditing = (grocery) => {
    this.setState({ grocery, isEditing: true, errors: this.defaultErrors });
  };

  onStopEditing = () => {
    this.setState({ grocery: this.defaultGrocery, isEditing: false });
  };

  toggleBuy = (itemId) => {
    const { toggleBuy } = this.props;
    toggleBuy(itemId);
  };

  render() {
    const { grocery, errors, isEditing } = this.state;
    const { items } = this.props;

    return (
      <div className="main container">
        <h1>Grocery Listify</h1>
        <div className="row">
          <div className="items col-md-9">
            <TransactionSummary items={items || []} />
            <GroceryItems
              groceries={items || []}
              deleteItem={this.onDeleteItem}
              startEditing={this.onStartEditing}
              toggleBuy={this.toggleBuy}
            />
          </div>
          <div className="item-form col-md-3">
            <AddGroceryItem
              grocery={grocery}
              errors={errors}
              onChange={this.onFormFieldChange}
              stopEditing={this.onStopEditing}
              saveItem={this.onAddGrocery}
              isEditing={isEditing}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ grocery: { type, items, error } }) => ({ type, items, error });
export default connect(
  mapStateToProps,
  {
    getAllItems,
    addItem,
    updateItem,
    resetGroceryState,
    deleteItem,
    toggleBuy
  }
)(Groceries);
