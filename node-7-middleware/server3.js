const auth = require('./auth-export');
const express = require('express');
const PORT = 3000
const app = express();

app.use(auth);

app.get('/protected-route', (req, res) => {
  res.send('You have access to this protected route!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})