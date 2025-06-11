require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/feature', (req, res) => {
  res.json({ message: 'Backend no longer evaluates flags.' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
