import {useI18n} from "../hooks/useI18n.ts";
import {IoSparklesSharp} from "react-icons/io5";

export function HeroBadge() {
    const { t } = useI18n();

    return (
        <div className="animate-fade-in mb-8">
            <div className="group relative inline-flex items-center">
                {/* Outer glow ring */}
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-accent/30 via-accent-cyan/20 to-accent/30 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100" />

                {/* Badge body */}
                <div className="glass-strong relative flex items-center gap-2.5 overflow-hidden rounded-full border border-border-strong py-1.5 pl-2.5 pr-4 shadow-lg shadow-black/10">
                    {/* Animated sheen sweep */}
                    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-[var(--badge-shimmer)] to-transparent opacity-40 animate-badge-sheen" />
          </span>

                    {/* Icon chip */}
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent-cyan/10 ring-1 ring-inset ring-white/10">
            <IoSparklesSharp size={12} className="text-accent-soft" />
          </span>

                    {/* Text */}
                    <span className="relative text-xs font-medium tracking-tight text-content-strong">
            {t('hero.badge')}
          </span>

                    {/* Status dot */}
                    <span className="relative flex items-center">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400 opacity-60" />
          </span>
                </div>
            </div>
        </div>
    );
}
