const path = require('path');
const express = require('express');
const app = express();

// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/medtracker', {
//   logging: false
// });

//start listening and create server object
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log(`Your server, listening on port ${port}`);
});

//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..','public')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api')); // matches all requests to /api

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

module.exports = app;
