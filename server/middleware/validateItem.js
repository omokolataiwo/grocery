import validate from 'validate.js';
import { itemValidation } from './validationConstraint';

export default (req, res, next) => {
  const { name, amount, purchased } = req.body;
  const hasValidationError = validate({ name, amount, purchased }, itemValidation);


  if (hasValidationError) {
    return res.status(401).json({ error: hasValidationError });
  }

  req.body = { name, amount, purchased: !!purchased };
  return next();
};
