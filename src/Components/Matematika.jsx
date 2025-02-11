
import { useState } from "react";

export function Hisoblash() {
    const [son1, setSon1] = useState();
    const [son2, setSon2] = useState();

    return (
        <div>
            <h2>Matematik amallar</h2>
            <input 
                type="number" 
                placeholder="1-sonni kiriting" 
                value={son1} 
                onChange={(e) => setSon1(Number(e.target.value))} 
            />
            <input 
                type="number" 
                placeholder="2-sonni kiriting" 
                value={son2} 
                onChange={(e) => setSon2(Number(e.target.value))} 
            />

            <p>{`Yig‘indi: ${son1} + (${son2}) = ${son1 + (son2)}`}</p>
            <p>{`Ayirma: ${son1} - (${son2}) = ${son1 - (son2)}`}</p>
            <p>{`Ko‘paytma: ${son1} × (${son2}) = ${son1 * (son2)}`}</p>
            <p>{`Bo‘linma: ${son1} ÷ (${son2}) = ${son2 !== 0 ? (son1 / (son2)).toFixed(2) : "Nolga bo‘lish mumkin emas!"}`}</p>
        </div>
    );
}

