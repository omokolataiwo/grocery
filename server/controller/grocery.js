import groceryModel from '../model/grocery';

export default class {
  static all = async (req, res) => {
    try {
      const allGroceries = await groceryModel.allItems();
      return res.status(200).json({ items: allGroceries });
    } catch (error) {
      return res.state(500).json({ data: 'Error' });
    }
  }

  static add = async (req, res) => {
    try {
      const item = await groceryModel.add(req.body);
      console.log('========================> ', item);
      return res.status(201).json({ data: { item } });
    } catch (error) {
      return res.state(500).json({ data: 'Error!' });
    }
  };
}
