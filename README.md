# Simple Feature Toggle (with LaunchDarkly)

This example demonstrates LaunchDarkly feature toggles in a React frontend. A
minimal Node backend is included, but it no longer evaluates flags.

## Setup

1. Copy `frontend/.env.example` to `frontend/.env` and add your
   `REACT_APP_LD_CLIENT_ID`.
2. Start the backend:
   ```
   cd backend
   npm install
   npm start
   ```
3. In another terminal start the React app:
   ```
   cd frontend
   npm install
   npm start
   ```

Visit `http://localhost:3000` to test. The feature state is controlled in the
browser via LaunchDarkly flag key: `simple-test`.
