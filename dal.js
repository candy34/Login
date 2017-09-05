const users = [{
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

function getUser(userId) {
  const foundUser = users.find(usr => Number(userId) === usr.id)
  return foundUser

}

function getUserByUsername(usrname) {
  const foundUser = users.find(usr => usrname === usr.username)
  return foundUser
}

function getUserByUsername(usrname) {
  const foundUser = users.find(usr => usrname === usr.username)
  return foundUser
}

function getUsers() {
  return users
}

module.exports = {
  getUser,
  getUserByUsername,
  getUsers
}
