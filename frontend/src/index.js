import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

// Anonymous user fallback
let anonKey = localStorage.getItem('ld-user-key');
if (!anonKey) {
    anonKey = `anon-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('ld-user-key', anonKey);
}

const user = {
    key: anonKey,
    anonymous: true,
    country: 'Malaysia',
    custom: {
        plan: 'free',
        team: 'guest'
    }
};

(async () => {
    const LDProvider = await asyncWithLDProvider({
        clientSideID: process.env.REACT_APP_LD_CLIENT_ID,
        context: user,
        timeout: 5 // in seconds → ensures it waits for LD init
    });

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <LDProvider>
            <App />
        </LDProvider>
    );
})();
