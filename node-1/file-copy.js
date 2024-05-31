const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'lorem.txt'), (err, data) => {
  if (err) throw err;

  fs.writeFile(path.join(__dirname, 'file-copy.txt'), data, (err) => {
    if (err) throw err;
    console.log('Fájl másolva');

    fs.readFile(path.join(__dirname, 'lorem.txt'), (err, OriginalData) => {
      if (err) throw err;

      fs.readFile(path.join(__dirname, 'file-copy.txt'), (err, CopiedData) => {
        if (err) throw err;

        if (OriginalData.toString() === CopiedData.toString()) {
          console.log('A két fájl megegyezik')
        } else {
          console.log('A két fájl nem egyezik meg')
        };
      })
    })
  })
});
