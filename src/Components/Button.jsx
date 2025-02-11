
import { useState, useEffect, useRef } from "react";

export function Obuna() {
    const [isSubscribed, setIsSubscribed] = useState(null);
    const promptAsked = useRef(false); 

    useEffect(() => {
        if (!promptAsked.current) { 
            promptAsked.current = true; 
            const javob = prompt("Obuna bo‘lganmisiz? (yes/no)")?.toLowerCase();
            setIsSubscribed(javob === "yes");
        }
    }, []);

    if (isSubscribed === null) return null; 

    return (
        <div>
            <button style={{marginTop: "20px", backgroundColor: "cyan", border: "0", padding: "10px 10px"}} onClick={() => setIsSubscribed(!isSubscribed)}>
                {isSubscribed ? "Obunani bekor qilish" : "Obuna bo‘lish"}
            </button>

            {isSubscribed && <p style={{ color: "red", fontWeight: "bold" }}>Siz obuna bo‘lgansiz</p>}
        </div>
    );
}










