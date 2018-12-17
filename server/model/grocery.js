import mongoose from 'mongoose';

const grocerySchema = new mongoose.Schema({
  name: String,
  amount: String,
  purchased: Boolean
});

const GroceryModel = mongoose.model('Grocery', grocerySchema);

export default class Grocery {
  static add = async (groceryData) => {
    const grocery = new GroceryModel(groceryData);
    const newGrocery = await grocery.save();
    return newGrocery;
  };

  static allItems = async () => {
    const allGrocery = await GroceryModel.find();
    return allGrocery;
  };

  static delete = async (id) => {
    const grocery = await GroceryModel.findById({ _id: id });

    if (!grocery) {
      throw Error('Item not found');
    }

    await GroceryModel.findByIdAndDelete({ _id: id });
    return grocery;
  };

  static edit = async (id, body) => {
    const grocery = await GroceryModel.findById({ _id: id });

    if (!grocery) {
      throw Error('Item not found');
    }

    await GroceryModel.updateOne({ _id: id }, body);
  };
}
