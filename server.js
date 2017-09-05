const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const dal = require('./dal')
cont app = express()

app.egine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view egine', 'mustache')

app.use(bodyParser.json())
app.use(body.Parser.urlencoded({
  extended: true
}))

app.use(
  session({
    secret: 'this is the end'
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: null
    }

  })
)
app.use(function(require, response, next) {
  if (re.session.usr) {
    req.isAuthenticated = true
  } else {
    req.isAuthenticated = false

  }
  console.log(req.isAuthenticated, 'session')
  next()
})
app.get('/', function(req, res) {
  if (req.isAuthenticated) {
    const users = dal.getUsers()
    res.render('admin', {
      users: users,
      loggedUsr: req.session.usr
    })
  } else {
    res.redirect('/')

  }
})

app.get('/login', function(request, respond) {
  res.render('login')
})
app.post('/login', function(request, response) {
  const sesh = req.session
  const foundUsr = dal.getUserByUsername(req.body.username)
  if (req.body.password === foundUsr.password) {
    req.session.usr = {
      name: foundUsr.name
    }
    res.redirect('/admin')
  } else {
    res.send('Ya Blew it')
  }
})
app.get('/logout', fucntion(request, response) {
  req.session.destroy()
  res.render('logout')
})
app.listen(3000, fucntion() {
  console.log('server running on port 3000')

})
