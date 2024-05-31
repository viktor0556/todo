const fs = require('fs');
const filePath = 'read-write-file-exercise/lorem.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Hiba történt:', err)
    return;
  }

  const lineCount = data.split('\n').length;

  console.log('A fájlban lévő sorok száma:', lineCount);
})

