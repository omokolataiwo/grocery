import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({
  label, placeholder, name, value, onChange, errors, size
}) => (
  <div>
    <div className={`form-group col-md-${size}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        className="form-control"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="error">
        {errors.map((error, index) => (
          <span key={index}>{error}</span>
        ))}
      </div>
    </div>
  </div>
);

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired)
};

TextInputField.defaultProps = {
  errors: []
};
export default TextInputField;
