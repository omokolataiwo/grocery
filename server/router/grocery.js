import GroceryController from '../controller/grocery';
import validateItem from '../middleware/validateItem';

const BASE_ROUTE = '/grocery';

export default (app) => {
  app.get(`${BASE_ROUTE}`, GroceryController.all);
  app.post(`${BASE_ROUTE}`, validateItem, GroceryController.add);
  app.put(`${BASE_ROUTE}/:id`, validateItem, GroceryController.edit);
  app.delete(`${BASE_ROUTE}/:id`, GroceryController.delete);
};
