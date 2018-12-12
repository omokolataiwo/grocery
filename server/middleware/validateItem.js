import validate from 'validate.js';
import { itemValidation } from './validationConstraint';

export default (req, res, next) => {
  const { name, amount } = req.body;
  const hasValidationError = validate({ name, amount }, itemValidation);


  if (hasValidationError) {
    return res.status(401).json({ error: hasValidationError });
  }
  return next();
};
