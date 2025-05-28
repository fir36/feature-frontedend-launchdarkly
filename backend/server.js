require('dotenv').config();
const express = require('express');
const cors = require('cors');
const LaunchDarkly = require('launchdarkly-node-server-sdk');

const app = express();
const port = 3001;

app.use(cors());

const ldClient = LaunchDarkly.init(process.env.LD_SDK_KEY);

app.get('/feature', async (req, res) => {
    try {
        await ldClient.waitForInitialization();
        const user = { key: req.query.user || "anonymous-user" };
        const showFeature = await ldClient.variation("show-feature-flag", user, false);
        res.json({ showFeature });
    } catch (error) {
        console.error("LD error:", error);
        res.status(500).json({ showFeature: false });
    }
});

app.listen(port, () => {
    console.log(`LD backend running on http://localhost:${port}`);
});
