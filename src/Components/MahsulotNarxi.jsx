export function Mahsulot() {
    const mahsulot = {
        nomi: "Smartfon",
        narxi: 2500000
    };

    return (
        <div>
            <h2>Mahsulot ma’lumotlari</h2>
            <p>{`Mahsulot: ${mahsulot.nomi}, Narxi: ${mahsulot.narxi} so‘m`}</p>
        </div>
    );
}
