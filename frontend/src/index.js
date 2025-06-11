// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LDProvider } from 'launchdarkly-react-client-sdk';

// Full user object with common attributes
const user = { 
    key: 'user-123',               // Required unique user key
    name: 'John Doe',              // Optional
    email: 'john@example.com',     // Optional
    country: 'Malaysia',           // IMPORTANT for your flag rule to match!
    custom: {                      // You can add any other custom attributes here
        plan: 'premium',
        team: 'marketing'
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LDProvider 
        clientSideID={process.env.REACT_APP_LD_CLIENT_ID} 
        user={user}                // Pass full user object here
    >
        <App />
    </LDProvider>
);
