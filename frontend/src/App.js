import React, { useEffect, useState } from 'react';
import { useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
    const ldClient = useLDClient();
    const [showFeature, setShowFeature] = useState(false);

    useEffect(() => {
        if (ldClient) {
            const currentVariation = ldClient.variation('frontend-feature', false);
            console.log('[LaunchDarkly] Forced evaluation:', currentVariation);
            setShowFeature(currentVariation);
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
