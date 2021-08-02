const express = require('express');
const connectdb = require('./database');

const app = express();

connectdb();

app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hey, whats up');
});

//define route
app.use('/reports', require('./routes/report'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server started on port ' + PORT);
});
