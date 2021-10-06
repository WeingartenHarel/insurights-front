
    
const Locations = [
  {
    "_id": "loc0a1",
    "name": "locationA",
    "cord":{lat:'32.08435264185234',lng:'34.7682900889132'}   
  },
  {
    "_id": "loc0a2",
    "name": "locationB",
    "cord":{lat:'32.07786201659029',lng:'34.76604776217188'}   
  },
  {
    "_id": "loc0a3",
    "name": "locationC",
    "cord":{lat:'32.08028091682708',lng:'34.76671832397856'}   
  },
  {
    "_id": "loc0a4",
    "name": "locationD",
    "cord":{lat:'32.07928926642242',lng:'34.76650910210338'}   
  }, 
];

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
  return new Promise((resolve, reject) => { 
    var LocationsToReturn = Locations;
    if (filterBy && filterBy.term) {
      LocationsToReturn = filter(filterBy.term)
    }   
    resolve(sort(LocationsToReturn))
  })
}

function getLocations (filterBy = null) {
  return new Promise((resolve, reject) => { 
    var LocationsToReturn = Locations;
    if (filterBy && filterBy.term) {
      LocationsToReturn = filter(filterBy.term)
    }
    resolve(sort(LocationsToReturn))
  })
}

function getById (id) {
    return new Promise((resolve, reject) => {
      const Location = Locations.find( Location => Location._id === id)
      Location ? resolve(Location) : reject(`Location id ${id} not found!`)
    })
}

function deleteLocation(id) {
  return new Promise((resolve, reject) => { 
    const index = Locations.findIndex( Location => Location._id === id)
    if (index !== -1) {
      Locations.splice(index, 1)
    }

    resolve(Locations)
  })
}

function _updateLocation(Location) {
  return new Promise((resolve, reject) => { 
    const index = Locations.findIndex( c => Location._id === c._id)
    if (index !== -1) {
      Locations[index] = Location
    }
    resolve(Location)
  })
}

function _addLocation(Location) {
  return new Promise((resolve, reject) => { 
    Location._id = _makeId()
    Locations.push(Location)
      resolve(Location)
    
  })
}

function saveLocation(Location) {
  console.log('update action ', Location)
  return Location._id ? _updateLocation(Location) : _addLocation(Location)
}

function getEmptyLocation() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function filter (term) {
  term = term.toLocaleLowerCase()
  return Locations.filter( Location => {
    return Location.name.toLocaleLowerCase().includes(term) ||
           Location.phone.toLocaleLowerCase().includes(term) ||
           Location.email.toLocaleLowerCase().includes(term)
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

const LocationService = {
  query,
  getById,
  getLocations,
  deleteLocation,
  saveLocation,
  getEmptyLocation,

} 
  
export default LocationService 