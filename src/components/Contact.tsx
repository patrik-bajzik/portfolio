import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useReveal } from '../hooks/useReveal';
import { useI18n } from '../i18n/I18nContext';
import type { TranslationKey } from '../i18n/translations';

const channels: {
    labelKey: TranslationKey;
    value: string;
    href: string;
    icon: typeof Mail | typeof GithubOutlined;
}[] = [
    { labelKey: 'contact.email.label', value: 'alex@mercer.dev', href: 'mailto:alex@mercer.dev', icon: Mail },
    { labelKey: 'contact.github.label', value: '@alexmercer', href: 'https://github.com', icon: GithubOutlined },
    { labelKey: 'contact.linkedin.label', value: 'in/alexmercer', href: 'https://linkedin.com', icon: LinkedinOutlined },
    { labelKey: 'contact.discord.label', value: 'alex.mercer', href: '#', icon: MessageCircle },
];

export function Contact() {
    const { ref, visible } = useReveal();
    const { t } = useI18n();

    return (
        <section id="contact" className="relative py-28 sm:py-36">
            <div className="mx-auto max-w-6xl px-5">
                <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-soft">{t('contact.label')}</span>
                        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>

                    <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface/40">
                        <div className="relative grid lg:grid-cols-[1fr_1fr]">
                            {/* Ambient */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />
                                <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-accent-cyan/5 blur-[90px]" />
                            </div>

                            {/* Left: pitch */}
                            <div className="relative p-8 sm:p-12">
                                <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-content-strong sm:text-4xl md:text-5xl">
                                    {t('contact.title')}{' '}
                                    <span className="font-display italic text-content-muted">{t('contact.titleAccent')}</span>
                                </h2>
                                <p className="mt-5 max-w-md text-base leading-relaxed text-content-muted">
                                    {t('contact.body')}
                                </p>
                                <a
                                    href="mailto:alex@mercer.dev"
                                    className="group mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-95"
                                    style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)' }}
                                >
                                    {t('contact.cta')}
                                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </div>

                            {/* Right: channels */}
                            <div className="relative grid grid-cols-1 gap-px border-t border-border bg-white/[0.02] sm:grid-cols-2 lg:border-l lg:border-t-0">
                                {channels.map((c) => (
                                    <a
                                        key={c.labelKey}
                                        href={c.href}
                                        target={c.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noreferrer"
                                        className="group relative flex flex-col justify-between bg-bg-elevated/40 p-6 transition-colors hover:bg-surface-hover"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2/40 text-content-muted transition-colors group-hover:text-content-strong">
                                                <c.icon size={18} />
                                            </div>
                                            <ArrowUpRight
                                                size={15}
                                                className="text-content-faint opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-content-muted group-hover:opacity-100"
                                            />
                                        </div>
                                        <div className="mt-8">
                                            <div className="text-xs uppercase tracking-wider text-content-faint">{t(c.labelKey)}</div>
                                            <div className="mt-1 text-sm font-medium text-content">{c.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
