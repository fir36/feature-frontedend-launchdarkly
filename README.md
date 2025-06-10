# Simple Feature Toggle (with LaunchDarkly)

This version adds LaunchDarkly to dynamically control feature toggles.

## Setup

1. Copy `frontend/.env.example` to `frontend/.env` and add your `REACT_APP_LD_CLIENT_ID`
2. Start frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

Visit `http://localhost:3000` to test. The feature state is controlled via LaunchDarkly flag key: `simple-test`.
