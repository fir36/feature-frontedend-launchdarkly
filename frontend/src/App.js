import React from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';

function App() {
    const { 'simple-test': bannerVariation } = useFlags();

    const showFeature = bannerVariation === 'show-banner';

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
