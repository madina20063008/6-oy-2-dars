import { useState } from "react";

export function AktivTugma() {
    const [isActive, setIsActive] = useState(true); 

    return (
        <div>
            
            <select style={{backgroundColor: "cyan", border: "0", padding: "10px 10px"}} onChange={(e) => setIsActive(e.target.value === "true")} value={isActive.toString()}>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>

            <button
                style={{
                    backgroundColor: isActive ? "green" : "red",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px",
                }}
            >
                {isActive ? "Faol" : "Faol emas"}
            </button>
        </div>
    );
}
