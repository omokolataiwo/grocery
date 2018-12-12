import React from 'react';
import PropTypes from 'prop-types';
import InputTextField from './TextInputField';

const SigninForm = ({ user, errors, onChange }) => (
  <form>
    <InputTextField
      label="Username"
      name="username"
      placeholder="Eg: maxwell"
      size={12}
      onChange={onChange}
      error={errors.username}
      value={user.username}
    />
    <InputTextField
      label="Password"
      name="password"
      placeholder="Password"
      size={12}
      onChange={onChange}
      error={errors.password}
      value={user.password}
    />
    <button type="button" className="btn btn-primary">
      Signin
    </button>
  </form>
);

SigninForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  errors: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string
  }).isRequired
};

export default SigninForm;
