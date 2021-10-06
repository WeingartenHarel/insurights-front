import  userService  from '../../services/userService'

// Action Dispatcher
export function loadUsers() {
  return async dispatch => {
    const user = await userService.getUser()
    console.log('loadUsers user',user)
    dispatch({ type: 'SET_USER', user })
  }
}  

// export function getUser() {
//     return async dispatch => {
//       const user = await userService.getUser()
//       console.log('getUser user',user)
//       dispatch({ type: 'SET_USER', user })
//     }
// }


// export function getById(userId) {
//   return async dispatch => {
//     const user = await userService.getById(userId)
//     dispatch({ type: 'SET_USER', user })
//   }
// }

// export function removeUser(userId) {

//   return async dispatch => {
//     try {
//       await userService.deleteUser(userId)
//       dispatch({ type: 'REMOVE_USER', userId })
//     } catch (err) {
//       console.log('ERROR!');
//     }
//   }
// }

// export function addUser(user) {
//   return async dispatch => {
//     try {
//       const savedUser = await userService.saveUser(user)
//       dispatch({ type: 'ADD_USER', user: savedUser })
//     } catch (err) {
//       console.log('ERROR!');
//     }
//   }
// }
// export function updateUser(user) {
//   console.log('update action ', user)
//   return async dispatch => {
//     try {
//       const savedUser = await userService.saveUser(user)
//       dispatch({ type: 'UPDATE_USER', user: savedUser })
//     } catch (err) {
//       console.log('ERROR!');
//     }
//   }
// }