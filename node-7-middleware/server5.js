const manageState = require('./manage-state-export');
const express = require('express');
PORT = 3000

const app = express();

app.use(manageState);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});