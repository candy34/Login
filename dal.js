let userInfo = [ {
    id: 1,
    name: 'Harry Potter',
    username: 'harpot',
    password: 'hogwarts'
  },
  {
    id: 2,
    name: 'Ron Weasley',
    username: 'weeze',
    password: 'gingerhouse'
  }
]

function getUser(username) {
  const foundUser = userInfo.find(usr => usrname === usr.username)
  return foundUser

}


function getUserPass(usrpass) {
  const foundPass = userInfo.find(usr => usrpass === usr.password)
  return foundPass
}

function getUsers() {
  return userInfo
}
console.log(userInfo);

module.exports = {
  getUser,
  getUserPass,
  getUsers
}
