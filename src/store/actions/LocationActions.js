import  LocationsService  from '../../services/locationService'

// Action Dispatcher 
export function loadLocations(filterBy) {
  console.log('loadLocations filterBy',filterBy)
  return async dispatch => {
    const Locations = await LocationsService.query(filterBy)
    dispatch({ type: 'SET_LocationS', Locations })
  }
}


export function getById(LocationId) {
  return async dispatch => {
    const Location = await LocationsService.getById(LocationId)
    dispatch({ type: 'SET_Location', Location })
  }
}
export function removeLocation(LocationsId) {

  return async dispatch => {
    try {
      await LocationsService.deleteLocation(LocationsId)
      dispatch({ type: 'REMOVE_Location', LocationsId })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}

export function addLocation(Locations) {
  return async dispatch => {
    try {
      const savedLocation = await LocationsService.saveLocation(Locations)
      dispatch({ type: 'ADD_Location', Locations: savedLocation })
      return savedLocation
    } catch (err) {
      console.log('ERROR!');
    }
  }
}
export function updateLocation(Locations) {
  console.log('update action ', Locations)
  return async dispatch => {
    try {
      const savedLocation = await LocationsService.saveLocation(Locations)
      dispatch({ type: 'UPDATE_Location', Locations: savedLocation })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}