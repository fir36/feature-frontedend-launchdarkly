# Simple Feature Toggle (with LaunchDarkly)

This repo now only contains a React example that uses the LaunchDarkly
client to dynamically control feature toggles. A separate backend is no
longer required.

## Setup

1. Copy `frontend/.env.example` to `frontend/.env` and add your `REACT_APP_LD_CLIENT_ID`.
2. Install dependencies and start the React app:
   ```
   cd frontend
   npm install
   npm start
   ```

Visit `http://localhost:3000` to test. The feature state is controlled via LaunchDarkly flag key: `simple-test`.

There is no backend service in this repository; all flag evaluation happens in the browser.
