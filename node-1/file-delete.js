const fs = require('fs')
const path = require('path')
const fileName = 'deleteable-file.txt'
const filePath = path.join(__dirname, 'deleteable-file.txt')

if (fs.existsSync(filePath)) {
  fs.unlink(filePath, (err) => {
    if (err) {console.error(
      "Hiba történt a törlés során", err);
      return;
    }
    console.log(`${fileName} sikeresen eltávolítva :)`)
  })
} else {
  console.error("A fájl nem létezik");
  fs.writeFile('read-write-file-exercise/deleteable-file.txt', 'asd', (err) => {
    console.log(`${fileName} sikeresen létrehozva.`)
  })
}
