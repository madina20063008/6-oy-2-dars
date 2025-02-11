// export function RasmKorsatish() {
//     const imgUrl = "https://via.placeholder.com/150"; // Agar rasm yo'q bo'lsa, null yoki "" qilib qo'yish mumkin

//     return (
//         <div>
//             {imgUrl ? (
//                 <img src={imgUrl} alt="Rasm" style={{ width: "150px", height: "150px", borderRadius: "8px" }} />
//             ) : (
//                 <p style={{ color: "red", fontWeight: "bold" }}>Rasm topilmadi</p>
//             )}
//         </div>
//     );
// }

import { useState, useRef } from "react";

export function RasmKorsatish() {
    const [imgUrl, setImgUrl] = useState(null);
    const isPrompted = useRef(false); // ✅ Keeps track of whether the prompt has been shown

    if (!isPrompted.current) {
        isPrompted.current = true; // Mark as prompted to prevent re-running
        const userInput = prompt("imgUrl bo'lsa true yozing, bo'lmasa false")?.trim().toLowerCase();
        setImgUrl(userInput === "true");
    }

    return (
        <div>
            {imgUrl ? (
                <img 
                    src="https://img.vivense.com/720x480/images/1ff4b9702c9c40c1bfa67f477282d631.jpg" 
                    alt="Rasm" 
                />
            ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>Rasm topilmadi</p>
            )}
        </div>
    );
}



