const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')

app.get('/hiba', (req, res, next) => {
  throw new Error('Teszt hiba dobása');
});

app.use((err, req, res, next) => {

  console.error(`${new Date().toISOString()} - ${err.message}`);

  const errorLogPath = path.join(__dirname, 'errors.log');
  const logMessage = `${new Date().toISOString()} - ${err.stack}\n`;

  fs.appendFile(errorLogPath, logMessage, (appendErr) => {
    if (appendErr) {
      console.error('Hiba történt a log fájl írása során:', appendErr);
    }
  })

  res.status(500).send('Valami hiba történt!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT}-es porton`);
});