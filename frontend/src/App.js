// frontend/src/App.js

import React, { useEffect } from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
    // Get the flag value
    const { 'simple-test': bannerVariation } = useFlags();

    // Get the LDClient instance
    const ldClient = useLDClient();

    // Convert flag value to boolean for UI
    const showFeature = bannerVariation === 'show-banner';

    // Force evaluate the flag (forces LaunchDarkly to log evaluation event)
    useEffect(() => {
        if (ldClient) {
            // Variation call triggers evaluation event
            const currentVariation = ldClient.variation('simple-test', 'hide-banner');
            console.log('[LaunchDarkly] Forced evaluation:', currentVariation);
        }
    }, [ldClient]);

    return (
        <div style={{ padding: 20 }}>
            <h1>Feature Toggle with LaunchDarkly</h1>

            {showFeature ? (
                <div style={{ background: 'lightgreen', padding: 10 }}>
                    ✅ LaunchDarkly Feature is ENABLED!
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
