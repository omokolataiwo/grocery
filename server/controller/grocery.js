import groceryModel from '../model/grocery';

export default class {
  static all = async (req, res) => {
    try {
      const allGroceries = await groceryModel.allItems();
      return res.status(200).json({ data: allGroceries });
    } catch (error) {
      return res.state(500).json({ data: 'Error' });
    }
  }

  static add = async (req, res) => {
    try {
      await groceryModel.add(req.body);
      return res.status(201).json({ data: { message: 'Item Added' } });
    } catch (error) {
      return res.state(500).json({ data: 'Error!' });
    }
  };
}
