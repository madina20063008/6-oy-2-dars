export function UzunIsmlar() {
    const ismlar = ["Ali", "Sardor", "Madina", "Bobur", "Dilshod", "Ziyoda"];

    const uzunIsmlar = ismlar.filter(ism => ism.length > 5);

    return (
        <div>
            <h3>5 harfdan uzun ismlar:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {uzunIsmlar.map((ism, index) => (
                    <li key={index} style={{ fontSize: "18px", color: "green" }}>
                        {ism}
                    </li>
                ))}
            </ul>
        </div>
    );
}
