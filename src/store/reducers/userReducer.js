const INITIAL_STATE = {
  // user: { _id:'usern001', name: 'Popo', balance: 100 },
  users:[],
  user: null,
} 
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'REMOVE_USER':
      return {
        ...state,
        user: state.user.filter(Item => Item._id !== action.ItemId)
      }
    case 'ADD_USER':
      return {
        ...state,
        user: [...state.user, action.Item]
      }
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user.map(Item => Item._id === action.Item._id ? action.Item : Item)
      }
    default:
      return state
  }
}