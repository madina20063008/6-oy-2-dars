export function ShaharlarRoyxati() {
    const shaharlar = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Andijon"];

    return (
        <div>
            <h2>Shaharlar royxati:</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {shaharlar.map((shahar, index) => (
                    <li key={index}>{shahar}</li>
                ))}
            </ul>
        </div>
    );
}