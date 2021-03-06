var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sessionConfig = require('./modules/session.config');

var passport = require('./strategy/auth.js');

// Route includes
var indexRouter = require('./routes/index.router');

var volunteersRouter = require('./routes/volunteers.router');

var eventsRouter = require('./routes/events.router');

var userRouter = require('./routes/user.router');

var skillsRouter = require('./routes/skills.router');

// var customerRouter = require('./routes/customer.router');


var port = process.env.PORT || 5000;

// Passport Session Configuration
app.use(sessionConfig);

app.use(passport.initialize());
app.use(passport.session());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));

app.use('/events', eventsRouter);

// Catch all bucket, must be last!
// app.use('/customer', customerRouter);
app.use('/user', userRouter);
app.use('/volunteers', volunteersRouter);
app.use('/skills', skillsRouter);
app.use('/', indexRouter);



// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
