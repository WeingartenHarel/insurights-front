const INITIAL_STATE = {
  Items: [],
  currItem: null
} 
export function ItemReducer(state = INITIAL_STATE, action) {
  console.log('SET_ItemS action',action)
  switch (action.type) {
    case 'SET_ItemS':
      return {
        ...state,
        Items: action.Items
      }
    case 'SET_Item':
      return {
        ...state,
        currItem: action.Item
      }
    case 'REMOVE_Item':
      return {
        ...state,
        Items: state.Items.filter(Item => Item._id !== action.ItemId)
      }
    case 'ADD_Item':
      console.log('reducer ADD_Item',action);
      // console.log('reducer ADD_Item',action.Item);
      return {
        ...state,
        Items: [...state.Items, action.Item]
      }
    case 'UPDATE_Item':
      return {
        ...state,
        Items: state.Items.map(Item => Item._id === action.Item._id ? action.Item : Item)
      }
    default:
      return state
  }
}