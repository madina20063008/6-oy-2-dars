import { useState } from "react";

export function Til() {
    const [lang, setLang] = useState("uz"); 

    const greetings = {
        uz: "Salom!",
        en: "Hello!",
        ru: "Привет!",
    };

    return (
        <div>
            <select style={{marginTop: "20px", backgroundColor: "cyan", border: "0", padding: "10px 10px"}} onChange={(e) => setLang(e.target.value)} value={lang}>
                <option value="uz">O'zbek</option>
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>

            <p style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
                {greetings[lang] || "Til topilmadi!"}
            </p>
        </div>
    );
}
