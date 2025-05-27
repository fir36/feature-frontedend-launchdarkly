import { useEffect, useState } from "react";

function App() {
    const [showFeature, setShowFeature] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/feature")
            .then(res => res.json())
            .then(data => setShowFeature(data.showFeature))
            .catch(err => console.error("Error:", err));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Simple Feature Toggle</h1>
            {showFeature ? (
                <div style={{ background: "lightgreen", padding: 10 }}>
                    ✅ New Feature is Enabled!
                </div>
            ) : (
                <div style={{ background: "lightgray", padding: 10 }}>
                    🔒 Feature Coming Soon.
                </div>
            )}
        </div>
    );
}

export default App;
