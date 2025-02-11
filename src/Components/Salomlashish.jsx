
import { useState } from "react";

export function Salomlashish() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const handleLogin = () => {
        let userInput = prompt("Tizimga kirgan bo‘lsangiz 'true' deb yozing, aks holda 'false' yozing:")?.trim().toLowerCase();
        setIsLoggedIn(userInput === "true");
    };

    return (
        <div>
            {isLoggedIn !== null && (
                <h2>{isLoggedIn ? "Xush kelibsiz!" : "Iltimos, tizimga kiring!"}</h2>
            )}
            <button style={{ backgroundColor: "cyan", border: "0", padding: "10px 10px"}} onClick={handleLogin}>Tizimga kirish</button>
        </div>
    );
}





