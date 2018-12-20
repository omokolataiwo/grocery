import grocery from '../../../web/src/reducers/grocery';
import {
  RESET_GROCERY_STATE,
  ADD_NEW_ITEM,
  DELETE_ITEM,
  FETCH_ALL_ITEMS,
  BUYING_ITEM,
  UPDATE_ITEM,
  UPDATE_ITEM_FAILURE
} from '../../../web/src/const';

const item = {
  _id: 'rmon',
  name: 'Light Milk',
  amount: '20000',
  purchased: true
};

describe('grocery Reducer', () => {
  it('should return default state', () => {
    expect(grocery(undefined, {})).toEqual({});
  });

  it('should add new item to state', () => {
    expect(
      grocery(
        { items: [] },
        {
          type: ADD_NEW_ITEM,
          item
        }
      )
    ).toEqual({ type: ADD_NEW_ITEM, items: [item] });
  });

  it('should delete item in state', () => {
    expect(grocery({ items: [item] }, { type: DELETE_ITEM, id: item._id })).toEqual({
      type: DELETE_ITEM,
      items: []
    });
  });

  it('should fetch all items in state', () => {
    const newState = grocery({ items: [item] }, { type: FETCH_ALL_ITEMS, items: [item] });

    expect(newState).toEqual({
      type: FETCH_ALL_ITEMS,
      items: [item]
    });
  });

  it('should toggle buying item in state', () => {
    const newState = grocery({ items: [item] }, { type: BUYING_ITEM, itemId: item._id });
    expect(newState.items[0].purchased).toEqual(!item.purchased);
  });

  it('should update item', () => {
    const newState = grocery(
      { items: [item] },
      {
        type: UPDATE_ITEM,
        item: { ...item, name: 'Bread' }
      }
    );

    expect(newState.items[0].name).toEqual('Bread');
  });

  it('should update item error state', () => {
    const newState = grocery(
      { items: [item] },
      {
        type: UPDATE_ITEM_FAILURE,
        error: [{ name: ['Name is required'] }]
      }
    );

    expect(newState.error).toEqual([{ name: ['Name is required'] }]);
  });

  it('should reset item state', () => {
    const newState = grocery(
      { items: [item] },
      { type: RESET_GROCERY_STATE }
    );

    expect(newState.type).toEqual(RESET_GROCERY_STATE);
  });
});
