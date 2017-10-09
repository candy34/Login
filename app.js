const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const dal = require('./dal')
const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view egine', 'mustache')
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(
  session({
    secret: 'this is the end',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: null}

  })
)
app.use(function(request, response, next) {
  if (request.session.usr) {
    request.isAuthenticated = true
  } else {
    request.isAuthenticated = false

  }
  console.log(request.isAuthenticated, 'session')
  next()
})
app.get('/', function (request, response) {
  res.render('home', {isAuthenticated: re.isAuthenticated})
})

app.get('/', function(request, response) {
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
  const foundUsr = dal.getUserByUser(req.body.username)
  if (req.body.password === foundUsr.password) {
    sesh.usr = { name: foundUsr.name}

    res.redirect('/admin')
  } else {
    res.send('Ya Blew it')
  }
})
app.get('/logout', function(request, response) {
  req.session.destroy()
  res.render('logout')
})
app.listen(3000, function() {
  console.log('server running on port 3000')

})
