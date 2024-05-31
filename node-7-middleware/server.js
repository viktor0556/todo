const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();

  const logEntry = `[${timestamp}]${req.method} ${req.url}\n`;

  console.log(logEntry);
  
  next();
}

const express = require('express')
const app = express();

app.use(loggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});