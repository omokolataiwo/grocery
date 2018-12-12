export const itemValidation = {
  name: {
    presence: {
      allowEmpty: false,
      message: 'is required.'
    }
  },
  amount: {
    presence: {
      allowEmpty: false,
      message: 'is required.'
    },
    numericality: {
      strict: true,
      greaterThan: 0
    }
  }
};
