const express = require('express');
const app = express();
const port = 3000;

// Middleware a POST adatok feldolgozásához
app.use(express.urlencoded({ extended: true }));

// Űrlap megjelenítése
app.get('/login', (req, res) => {
  res.send(`
    <form method="post" action="/login">
      <label for="username">Felhasználónév:</label>
      <input type="text" id="username" name="username"><br>
      <label for="password">Jelszó:</label>
      <input type="password" id="password" name="password"><br>
      <button type="submit">Bejelentkezés</button>
    </form>
  `);
});

// Űrlap adatok feldolgozása
app.post('/login', (req, res) => {
  const username = req.body.username;
  // Itt ellenőrizheted a jelszót vagy bármilyen más logikát
  res.send(`Üdvözöllek, ${username}!`);
});

// Szerver indítása
app.listen(port, () => {
  console.log(`Az Express alkalmazás fut a http://localhost:${port} címen!`);
});