const express = require('express');
const loggerMiddleware = require('./logger-export');
const PORT = 3000;

const app = express();

app.use(loggerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});