import React from 'react';
import PropTypes from 'prop-types';
import InputTextField from './TextInputField';

const SignupForm = ({ user, errors, onChange }) => (
  <form>
    <InputTextField
      label="First Name"
      name="firstName"
      placeholder="Eg: Maxwell"
      size={12}
      onChange={onChange}
      value={user.firstName}
    />
    <InputTextField
      label="Last Name"
      name="lastName"
      placeholder="Eg: Thomas"
      size={12}
      onChange={onChange}
      value={user.lastName}
    />
    <InputTextField
      label="Username"
      name="username"
      placeholder="Eg: mthomas"
      size={12}
      onChange={onChange}
      value={user.username}
    />

    <InputTextField
      label="Password"
      name="password"
      placeholder="Password"
      size={12}
      onChange={onChange}
      value={user.password}
    />
    <InputTextField
      label="Password Match"
      name="passwordMatch"
      placeholder="Password Match"
      size={12}
      onChange={onChange}
      value={user.passwordMatch}
    />
    <button type="button" className="btn btn-primary">
      Register
    </button>
  </form>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

export default SignupForm;
