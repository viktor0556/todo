const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'reply.txt'), 'asd', (err) => {
  if (err) throw err;
  console.log('Write complete...');
})