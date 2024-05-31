const express = require('express');
const app = express();
const path = ('path');
const PORT = 3500

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get('/*', (req, res) => {
  res.status(404).send('404')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))