import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LDProvider } from 'launchdarkly-react-client-sdk';

const user = { key: 'anonymous' };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LDProvider clientSideID={process.env.REACT_APP_LD_CLIENT_ID} user={user}>
    <App />
  </LDProvider>
);
