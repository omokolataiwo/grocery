import React, { Component } from 'react';
import { connect } from 'react-redux';
import SigninForm from '../container/SigninForm';

class Signin extends Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    errors: {}
  };

  onFormFieldChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  }

  render() {
    const { user, errors } = this.state;
    return (
      <div className="container">
        <h4>Sign in</h4>
        <SigninForm user={user} errors={errors} onChange={this.onFormFieldChange} />
      </div>
    );
  }
}

const mapStateToProps = () => ({});
export default connect(
  mapStateToProps,
  {}
)(Signin);
