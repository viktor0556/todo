const express = require('express');
const requestTimeMiddleware = require('./time-export');
const PORT = 3000;

const app = express();

app.use(requestTimeMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})