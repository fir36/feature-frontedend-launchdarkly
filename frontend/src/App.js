import React, { useEffect } from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
    // NEW FLAG NAME → frontend-feature
    const { 'frontend-feature': showFeature } = useFlags();

    const ldClient = useLDClient();

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
