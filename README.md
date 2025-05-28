# Simple Feature Toggle (with LaunchDarkly)

This version adds LaunchDarkly to dynamically control feature toggles.

## Setup

1. Add your `LD_SDK_KEY` to `backend/.env` (based on `.env.example`)
2. Start backend:
   ```
   cd backend
   npm install
   npm start
   ```

3. Start frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

Visit `http://localhost:3000` to test. The feature state is controlled via LaunchDarkly flag key: `show-feature-flag`.
