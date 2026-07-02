import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nContext';
import type { TranslationKey } from '../i18n/translations';

type Tech = {
    name: string;
    descKey: TranslationKey;
    glyph: string;
    tint: string;
};

const techs: Tech[] = [
    { name: 'Java', descKey: 'tech.java.desc', glyph: 'Jv', tint: 'from-orange-500/20 to-transparent' },
    { name: 'Spring Boot', descKey: 'tech.springboot.desc', glyph: 'Sb', tint: 'from-emerald-500/20 to-transparent' },
    { name: 'React', descKey: 'tech.react.desc', glyph: 'Re', tint: 'from-cyan-500/20 to-transparent' },
    { name: 'TypeScript', descKey: 'tech.typescript.desc', glyph: 'Ts', tint: 'from-blue-500/20 to-transparent' },
    { name: 'Tailwind CSS', descKey: 'tech.tailwind.desc', glyph: 'Tw', tint: 'from-sky-500/20 to-transparent' },
    { name: 'Docker', descKey: 'tech.docker.desc', glyph: 'Dk', tint: 'from-blue-400/20 to-transparent' },
    { name: 'PostgreSQL', descKey: 'tech.postgresql.desc', glyph: 'Pg', tint: 'from-indigo-500/20 to-transparent' },
    { name: 'Git', descKey: 'tech.git.desc', glyph: 'Gt', tint: 'from-orange-400/20 to-transparent' },
    { name: 'Linux', descKey: 'tech.linux.desc', glyph: 'Lx', tint: 'from-yellow-500/20 to-transparent' },
];

export function Technologies() {
    const { ref, visible } = useReveal();
    const { t } = useI18n();

    return (
        <section id="stack" className="relative py-28 sm:py-36">
            <div className="mx-auto max-w-6xl px-5">
                <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-soft">{t('tech.label')}</span>
                        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>

                    <h2 className="mt-10 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-content-strong sm:text-4xl md:text-5xl">
                        {t('tech.title')}{' '}
                        <span className="font-display italic text-content-muted">{t('tech.titleAccent')}</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-base text-content-muted">{t('tech.subtitle')}</p>

                    <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
                        {techs.map((tech, i) => (
                            <div
                                key={tech.name}
                                className="card-glow group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface-hover"
                                style={{ transitionDelay: `${i * 20}ms` }}
                            >
                                <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${tech.tint} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                                <div className="relative">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-elevated/60 font-mono text-sm font-semibold text-content transition-colors group-hover:text-content-strong">
                                        {tech.glyph}
                                    </div>
                                    <h3 className="mt-5 text-base font-medium text-content-strong">{tech.name}</h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-content-faint">{t(tech.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
