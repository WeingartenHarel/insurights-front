
import medicalData from './json/medical.js'
//  console.log('medical',medicalData)
const Items = medicalData;

function sort(arr) {
  return arr.sort( (a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}
 
function query (filterBy = null) {
  console.log('query filterBy',filterBy)
  return new Promise((resolve, reject) => { 
    var ItemsToReturn = Items;
    if (filterBy && filterBy.term) {
      ItemsToReturn = filter(filterBy.term)
    }
    console.log('query',ItemsToReturn)
    resolve(sort(ItemsToReturn))
  })
}

function getItems (filterBy = null) {
  return new Promise((resolve, reject) => { 
    var ItemsToReturn = Items;
    if (filterBy && filterBy.term) {
      ItemsToReturn = filter(filterBy.term)
    }
    
    resolve(sort(ItemsToReturn))
  })
}

function getItemById (id) {
    return new Promise((resolve, reject) => {
      const Item = Items.find( Item => Item._id === id)
      Item ? resolve(Item) : reject(`Item id ${id} not found!`)
    })
}

function deleteItem(id) {
  return new Promise((resolve, reject) => { 
    const index = Items.findIndex( Item => Item._id === id)
    if (index !== -1) {
      Items.splice(index, 1)
    }
    console.log('deleteItem',Items)
    resolve(Items)
  })
}

function deleteItems(items) {
  //console.log('deleteItems',items)
  return new Promise((resolve, reject) => { 
    for(var i=0; i < items.length ; i++){
      const index = Items.findIndex( Item => Item._id === items[i]._id)
      console.log('const index',index)
      
      if (index !== -1) {
        Items.splice(index, 1)
      }
    }

    console.log('service deleted Items',Items)
    resolve(Items)
  })
}

function _updateItem(Item) {
  console.log('_updateItem ',Item)
  return new Promise((resolve, reject) => { 
    const index = Items.findIndex( c => Item._id === c._id)
    if (index !== -1) {
      Items[index] = Item
    }
    resolve(Item)
  })
}

async function _addItem(Item) {
  console.log('service _addItem',Item)
  var newId = await _makeId();
    console.log("_addItem _id",Item)
   var newItem =  { 
      name:Item.name,
      _id:newId,
      services:{
        stage1:[
          {
            _id:'sid001',
            name:'service name'
          }
        ]
      }
  }
  console.log("_addItem newItem",newItem)
  return new Promise((resolve, reject) => { 
    // Item = getEmptyItem(Item);
    // Items.unshift(Item)

    Items.push(newItem)
    console.log("_addItem",Items)
    resolve(Items)
  }
  
  )
}

function saveItem(Item) {
  console.log('saveItem service ', Item)
  return Item._id ? _updateItem(Item) : _addItem(Item)
}

function getEmptyItem(Item) {
  return {
    name:'',
  }
}

function filter (term) {
  term = term.toLocaleLowerCase()
  console.log('filter term',term)
  return Items.filter( Item => {
    // console.log('filter Item',Item)
    return Item.name.toLocaleLowerCase().includes(term) 
          // || Item._id.toLocaleLowerCase().includes(_id)
  })
}



function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

const ItemService = {
  query,
  getItems,
  getItemById,
  deleteItem,
  deleteItems,
  saveItem,
  getEmptyItem,

} 
  
export default ItemService 

    
