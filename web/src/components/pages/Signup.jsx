import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../container/SignupForm';

class Signup extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordMatch: ''
    },
    errors: {}
  };

  onFormFieldChange = (event) => {
    const { name, value } = event.target;
    console.log('========================> ', value);
    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  };

  render() {
    const { user, errors } = this.state;

    return (
      <div className="container">
        <h4>New User Registration</h4>
        <SignupForm user={user} errors={errors} onChange={this.onFormFieldChange} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});
export default connect(
  mapStateToProps,
  {}
)(Signup);
