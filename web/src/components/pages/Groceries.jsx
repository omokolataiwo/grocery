import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GroceryItems from '../container/GroceryItems';
import AddGroceryItem from '../container/AddGroceryItem';
import { getAllItems, addItem, updateItem } from '../../actions/grocery';

class Shopping extends Component {
  // static propTypes = {
  //   groceries: PropTypes.arrayOf(PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     title: PropTypes.string.isRequired,
  //   })).isRequired
  // }

  state = {
    grocery: {
      title: '',
      amount: 0
    },
    errors: {}
  };

  componentDidMount() {
    const { getAllItems } = this.props;
    getAllItems();
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
        <AddGroceryItem grocery={grocery} errors={errors} onChange={this.onFormFieldChange} />
      </div>
    );
  }
}

const mapStateToProps = ({ grocery: { items } }) => ({ items });
export default connect(
  mapStateToProps,
  { getAllItems, addItem, updateItem }
)(Shopping);
