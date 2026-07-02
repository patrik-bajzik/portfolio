import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { HeroBadge } from './HeroBadge';
import type { TranslationKey } from '../i18n/translations';

const statKeys: { value: string; labelKey: TranslationKey }[] = [
    { value: '8+', labelKey: 'hero.stat.years' },
    { value: '40+', labelKey: 'hero.stat.projects' },
    { value: '12', labelKey: 'hero.stat.repos' },
    { value: '∞', labelKey: 'hero.stat.coffee' },
];

export function Hero() {
    const { t } = useI18n();

    return (
        <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" />
                <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent-cyan/5 blur-[100px]" />
            </div>

            {/* Grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)',
                    backgroundSize: '64px 64px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)',
                }}
            />

            <div className="mx-auto max-w-6xl px-5">
                <div className="flex flex-col items-center text-center">
                    <HeroBadge />

                    <h1 className="animate-fade-up text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                        <span className="gradient-text">{t('hero.titleLine1')}</span>
                        <br />
                        <span className="font-display italic text-content-muted">{t('hero.titleAccent')}</span>{' '}
                        <span className="gradient-text-accent">{t('hero.titleLine2')}</span>
                    </h1>

                    <p
                        className="animate-fade-up mt-8 max-w-xl text-balance text-base leading-relaxed text-content-muted sm:text-lg"
                        style={{ animationDelay: '0.1s', opacity: 0 }}
                    >
                        {t('hero.intro', { name: 'Patrik Bajzík' })}
                    </p>

                    <div
                        className="animate-fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
                        style={{ animationDelay: '0.2s', opacity: 0 }}
                    >
                        <a
                            href="#work"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-95"
                            style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)' }}
                        >
                            <span className="relative z-10">{t('hero.cta.work')}</span>
                            <ArrowUpRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-content backdrop-blur-md transition-all hover:border-border-strong hover:bg-surface-hover"
                        >
                            <span>{t('hero.cta.contact')}</span>
                            <ArrowDownRight size={16} className="transition-transform group-hover:translate-y-0.5" />
                        </a>
                    </div>

                    {/* Stats strip */}
                    <div
                        className="animate-fade-up mt-20 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-white/[0.02] sm:grid-cols-4"
                        style={{ animationDelay: '0.35s', opacity: 0 }}
                    >
                        {statKeys.map((s) => (
                            <div key={s.labelKey} className="bg-bg-elevated/40 px-6 py-6 text-left">
                                <div className="text-2xl font-semibold tracking-tight text-content-strong">{s.value}</div>
                                <div className="mt-1 text-xs text-content-faint">{t(s.labelKey)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
