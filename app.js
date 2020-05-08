const express = require('express');

const hbs = require('hbs');

require('dotenv').config();

const app = express();

// ****************** require the necessary npm package here: ******************
// ... your code here

// *****************************************************************************

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

// 4.
// ... your code here

// 5:
// ... your code here

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
