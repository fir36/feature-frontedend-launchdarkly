// frontend/src/App.js

import React, { useEffect } from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
    // Read your flag → must match "frontend-feature"
    const { 'frontend-feature': showFeature } = useFlags();

    // Get LDClient instance
    const ldClient = useLDClient();

    // Force evaluation event (optional, but helps show user in Evaluations tab)
    useEffect(() => {
        if (ldClient) {
            const currentVariation = ldClient.variation('frontend-feature', false);
            console.log('[LaunchDarkly] Forced evaluation:', currentVariation);
        }
    }, [ldClient]);

    return (
        <div style={{ padding: 20 }}>
            <h1>Feature Toggle with LaunchDarkly</h1>

            {showFeature ? (
                <div style={{ background: 'lightgreen', padding: 10 }}>
                    ✅ Feature is ENABLED!
                </div>
            ) : (
                <div style={{ background: 'lightgray', padding: 10 }}>
                    🔒 Feature is DISABLED.
                </div>
            )}
        </div>
    );
}

export default App;
