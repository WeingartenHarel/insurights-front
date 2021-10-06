// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser
  //updateUsers,
}
 
const users = [
  {
    _id:'usern001',
    name: "Agent Smith",
    role: "Location manager",
  }
];

// function updateUsers(amount) {
//   return new Promise((resolve, reject) => { 
//     const index = users.findIndex( c => user._id === c._id)
//     if (index !== -1) {
//       users[index] //change value
//     }
//     resolve(users)
//   })
// }

function getUser() {
    return users[0];
}
