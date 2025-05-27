const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/feature', (req, res) => {
    const showFeature = true; // Change this manually (no LaunchDarkly yet)
    res.json({ showFeature });
});

app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
});
