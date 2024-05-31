const fs = require('fs')
const path = require('path')

fs.appendFile(path.join(__dirname, 'lorem.txt'), '\n\nFile Changed!', (err) => {
  if (err) throw err;
  console.log('File changing...\nComplete')
})