import { useEffect, useState } from "react";

function App() {
    const [showFeature, setShowFeature] = useState(false);

    useEffect(() => {
        let userKey = localStorage.getItem("user-key");
        if (!userKey) {
            userKey = "user-" + Math.floor(Math.random() * 10000);
            localStorage.setItem("user-key", userKey);
        }

        fetch("http://localhost:3001/feature?user=" + userKey)
            .then(res => res.json())
            .then(data => setShowFeature(data.showFeature))
            .catch(() => setShowFeature(false));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Feature Toggle with LaunchDarkly</h1>
            {showFeature ? (
                <div style={{ background: "lightgreen", padding: 10 }}>
                    ✅ LaunchDarkly Feature is ENABLED!
                </div>
            ) : (
                <div style={{ background: "lightgray", padding: 10 }}>
                    🔒 Feature is DISABLED.
                </div>
            )}
        </div>
    );
}

export default App;
