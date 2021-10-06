import  ItemsService  from '../../services/categoryService'

// Action Dispatcher 
export function loadItems(filterBy) {
  console.log('Action Dispatcher loadItems',filterBy)
  return async dispatch => {
    const Items = await ItemsService.query(filterBy)
    console.log('Action Dispatcher loadItems',Items)
    dispatch({ type: 'SET_ItemS', Items })
  }
}

export function getById(ItemsId) {
  return async dispatch => {
    const Item = await ItemsService.getById(ItemsId)
    dispatch({ type: 'SET_Item', Item })
  }
}
export function removeItem(ItemsId) {
  // console.log("testing remove id =",ItemsId)
  return async dispatch => {
    try {
      await ItemsService.deleteItem(ItemsId)
      dispatch({ type: 'REMOVE_Item', ItemsId })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}
export function removeItems(ItemsToRemove) {
   //console.log("testing remove id =",Items)
  return async dispatch => {
    try {
      const Items = await ItemsService.deleteItems(ItemsToRemove)
      // const updatedItems = await ItemsService.deleteItems(Items)
      console.log('removeItems updatedItems',Items)
      // for(var i=0; i < Items.length ; i++){
      //   var itemId = Items[i]._id
      //   console.log('removeItems',[i],' ',itemId)
        dispatch({ type: 'SET_ItemS',  Items})
      //}
    } catch (err) {
      console.log('ERROR!');
    }
  }
}

export function addItem(Items) {
  console.log('addItem ',Items)

  return async dispatch => {
    try {
      const savedItem = await ItemsService.saveItem(Items)
      console.log('addItem savedItem',savedItem)
      dispatch({ type: 'ADD_Item', Item: savedItem })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}
export function updateItem(Items) {
  console.log('update action ', Items)
  return async dispatch => {
    try {
      const savedItem = await ItemsService.saveItem(Items)
      dispatch({ type: 'UPDATE_Item', Items: savedItem })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}

export function setItem(Item) {
  console.log('setItem',Item)
  return async dispatch => {
    try {
      // const savedItem = await ItemsService.saveItem(Items)
      dispatch({ type: 'SET_Item', Item: Item })
    } catch (err) {
      console.log('ERROR!');
    }
  }
}