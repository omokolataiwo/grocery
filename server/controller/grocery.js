import groceryModel from '../model/grocery';

export default class {
  static all = async (req, res) => {
    try {
      const allGroceries = await groceryModel.allItems();
      return res.status(200).json({ items: allGroceries });
    } catch (error) {
      return res.state(500).json({ data: 'Error' });
    }
  };

  static add = async (req, res) => {
    const item = await groceryModel.add(req.body);
    try {
      return res.status(201).json({ data: { item } });
    } catch (error) {
      return res.state(500).json({ data: 'Error!' });
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;
    try {
      const item = await groceryModel.delete(id);
      return res.status(200).json({ data: { item } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static edit = async (req, res) => {
    const { id } = req.params;
    try {
      await groceryModel.edit(id, req.body);
      return res.status(200).json({ data: { id } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
}
