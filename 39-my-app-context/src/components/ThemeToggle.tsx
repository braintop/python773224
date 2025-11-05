import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 מצב כהה" : "☀️ מצב אור"}
            </button>
        </div>
    );
}

