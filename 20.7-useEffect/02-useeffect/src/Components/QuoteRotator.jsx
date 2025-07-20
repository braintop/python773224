import { useEffect, useState } from "react";

export function QuoteRotator() {
    const quotes = [
        "הדרך לאלף מייל מתחילה בצעד אחד.",
        "החיים הם מה שקורה בזמן שאתה מתכנן תוכניות אחרות.",
        "כל יום הוא הזדמנות להתחלה חדשה.",
        "הצלחה היא תוצאה של התמדה, לא מזל.",
        "אל תסתכל על השעון – תעשה מה שהוא עושה: תמשיך לזוז."
    ];

    const [quote, setQuote] = useState("");
    function changeQuote() {
        let random = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[random])
    }

    useEffect(() => {
        let interval = setInterval(changeQuote, 5000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div style={{ borderRadius: "10px", border: "5px solid salmon", padding: "20px", textAlign: "center" }}>
            <h1>ציטוט להשראה</h1>
            <p style={{ fontSize: "30px" }}>
                {quote}
            </p>
        </div>
    )

}