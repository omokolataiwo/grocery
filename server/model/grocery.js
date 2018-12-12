import mongoose from 'mongoose';

const grocerySchema = new mongoose.Schema({
  name: String,
  amount: String
});

const GroceryModel = mongoose.model('Grocery', grocerySchema);

export default class Grocery {
  static add = async (groceryData) => {
    const grocery = new GroceryModel(groceryData);
    const newGrocery = await grocery.save();
    return newGrocery;
  }

  static update = async (_id, groceryData) => {
    GroceryModel.find({ _id });
  }

  static allItems = async () => {
    const allGrocery = await GroceryModel.find();
    return allGrocery;
  }
}
