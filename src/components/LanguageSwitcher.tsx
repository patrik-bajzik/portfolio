import { useI18n } from '../i18n/I18nContext';
import type { Locale } from '../i18n/translations';

const locales: Locale[] = ['sk', 'en'];

export function LanguageSwitcher() {
    const { locale, setLocale } = useI18n();

    return (
        <div
            role="group"
            aria-label="Language selector"
            className="relative flex items-center rounded-lg border border-border p-0.5"
        >
            {locales.map((l) => {
                const active = l === locale;
                return (
                    <button
                        key={l}
                        type="button"
                        onClick={() => setLocale(l)}
                        aria-pressed={active}
                        className={`relative rounded-md px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide transition-colors ${
                            active
                                ? 'text-content-strong'
                                : 'text-content-faint hover:text-content-muted'
                        }`}
                    >
                        {active && (
                            <span className="absolute inset-0 rounded-md bg-surface-hover" />
                        )}
                        <span className="relative z-10">{l.toUpperCase()}</span>
                    </button>
                );
            })}
        </div>
    );
}
