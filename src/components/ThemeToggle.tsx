import {useTheme} from "../hooks/useTheme.ts";
import {FaMoon} from "react-icons/fa";
import {IoSunnyOutline} from "react-icons/io5";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light theme' : 'Dark theme'}
            className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border text-content-muted transition-all hover:border-border-strong hover:text-content-strong hover:bg-surface-hover"
        >
      <span className="relative z-10 flex items-center justify-center">
        <IoSunnyOutline
            size={16}
            className={`absolute transition-all duration-500 ${
                isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`}
        />
        <FaMoon
            size={16}
            className={`absolute transition-all duration-500 ${
                isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
        />
      </span>
        </button>
    );
}
