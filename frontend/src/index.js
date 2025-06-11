// frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LDProvider } from 'launchdarkly-react-client-sdk';

// Anonymous user fallback
let anonKey = localStorage.getItem('ld-user-key');
if (!anonKey) {
    anonKey = `anon-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('ld-user-key', anonKey);
}

const user = {
    key: anonKey,
    anonymous: true,
    country: 'Malaysia',  // IMPORTANT for your flag rule to match!
    custom: {
        plan: 'free',
        team: 'guest'
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LDProvider clientSideID={process.env.REACT_APP_LD_CLIENT_ID} user={user}>
        <App />
    </LDProvider>
);
