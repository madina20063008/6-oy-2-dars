
import { useState } from "react";

export function Qiymat() {
    const [isAvailable, setIsAvailable] = useState(null);

    const handleLogin = () => {
        let userInput = prompt("Mahsulot mavjud bo'lsa true yozing bo'lmasa false")?.trim().toLowerCase();
        setIsAvailable(userInput === "true");
    };

    return (
        <div>
            {isAvailable !== null && (
                <h4>{isAvailable ? "Sotuvda mavjud" : ""}</h4>
            )}
            <button style={{ backgroundColor: "cyan", border: "0", padding: "10px 10px"}} onClick={handleLogin}>Mahsulot mavjudmi</button>
        </div>
    );
}
