import { useReveal } from '../hooks/useReveal';
import type { TranslationKey } from '../i18n/translations';
import {FaCode, FaTerminal} from "react-icons/fa";
import {IoLayers} from "react-icons/io5";
import {IconType} from "react-icons";
import {useI18n} from "../hooks/useI18n.ts";

const pillars: { icon: IconType; titleKey: TranslationKey; bodyKey: TranslationKey }[] = [
  { icon: FaCode, titleKey: 'about.pillar.engineering.title', bodyKey: 'about.pillar.engineering.body' },
  { icon: IoLayers, titleKey: 'about.pillar.architecture.title', bodyKey: 'about.pillar.architecture.body' },
  { icon: FaTerminal, titleKey: 'about.pillar.craft.title', bodyKey: 'about.pillar.craft.body' },
];

export function About() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-soft">{t('about.label')}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-content-strong sm:text-4xl md:text-5xl">
                {t('about.title')}{' '}
                <span className="font-display italic text-content-muted">{t('about.titleAccent')}</span>{' '}
                {t('about.titleEnd')}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-content-muted">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {pillars.map((p) => (
                <div
                  key={p.titleKey}
                  className="card-glow group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:border-border-strong hover:bg-surface-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-white/5 to-transparent text-accent-soft transition-colors group-hover:text-content-strong">
                      <p.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-content-strong">{t(p.titleKey)}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-content-muted">{t(p.bodyKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
