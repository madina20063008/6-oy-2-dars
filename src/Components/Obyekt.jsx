export function Obyekt() {
    const user = {
        ism: "Ali",
        familiya: "Karimov",
        yosh: 25
    };

    return (
        <div style={{ fontSize: "18px", fontWeight: "bold"}}>
            <p>Ism: {user.ism}</p>
            <p>Familiya: {user.familiya}</p>
            <p>Yosh: {user.yosh} yosh</p>
        </div>
    );
}
