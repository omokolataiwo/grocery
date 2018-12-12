import GroceryController from '../controller/grocery';
import validateItem from '../middleware/validateItem';

export default (app) => {
  const BASE_ROUTE = '/grocery';
  app.get(`${BASE_ROUTE}`, GroceryController.all);
  app.post(`${BASE_ROUTE}`, validateItem, GroceryController.add);
};
