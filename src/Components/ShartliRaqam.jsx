import { useState } from "react";

export function RaqamTekshiruv() {
    const [number, setNumber] = useState(0);

    // Raqam holatini aniqlash
    const getMessage = () => {
        if (number > 0) return "Musbat raqam";
        if (number < 0) return "Manfiy raqam";
        return "Bu nol";
    };

    return (
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
            />
            <span style={{ color: number > 0 ? "green" : number < 0 ? "red" : "blue" }}>
                {getMessage()}
            </span>
        </div>
    );
}
