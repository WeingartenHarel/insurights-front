const INITIAL_STATE = {
  Locations: [],
  currLocation: null
} 
export function LocationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LocationS':
      return {
        ...state,
        Locations: action.Locations
      }
      case 'SET_Location':
      return {
        ...state,
        currLocation: action.Location
      }

    case 'REMOVE_Location':
      return {
        ...state,
        Locations: state.Locations.filter(Location => Location._id !== action.LocationId)
      }
    case 'ADD_Location':
      return {
        ...state,
        Locations: [...state.Locations, action.Location]
      }
    case 'UPDATE_Location':
      return {
        ...state,
        Locations: state.Locations.map(Location => Location._id === action.Location._id ? action.Location : Location)
      }
    default:
      return state
  }
}