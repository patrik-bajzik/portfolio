import {useReveal} from '../hooks/useReveal';
import {useI18n} from "../hooks/useI18n.ts";
import type {TranslationKey} from '../i18n/translations';
import {GoArrowUpRight} from "react-icons/go";
import {FaGithub} from "react-icons/fa";

type ProjectStatus = 'active' | 'completed';

type Project = {
  title: string;
  blurbKey: TranslationKey;
  tags: string[];
  year: string;
  gradient: string;
  pattern: string;
  image?: string;
  github?: string;
  demo?: string;
  status?: ProjectStatus;
};

const projects: Project[] = [
  {
    title: 'QnSlide Web',
    blurbKey: 'projects.qnslide_web.blurb',
    tags: ['React', 'TypeScript', 'Tailwind', 'QnSlide'],
    year: '2026',
    gradient: 'from-indigo-500/20 via-transparent to-cyan-500/10',
    pattern: 'radial',
    github: 'https://github.com/patrik-bajzik/qnslide-web',
    status: 'active',
    // TODO: image: '../assets/qnslide-web',
  },
  {
    title: 'QnSlide Platform',
    blurbKey: 'projects.qnslide_platform.blurb',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
    year: '2026',
    gradient: 'from-cyan-500/15 via-transparent to-blue-500/10',
    pattern: 'grid',
    github: 'https://github.com/patrik-bajzik/qnslide-platform',
    status: 'active',
  },
  {
    title: 'MERN To-do List',
    blurbKey: 'projects.todo_list_mern.blurb',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    year: '2025',
    gradient: 'from-emerald-500/15 via-transparent to-teal-500/10',
    pattern: 'lines',
    // TODO: change image: '/images/todo-list-mern-cover.png',
    github: 'https://github.com/patrik-bajzik/todo-list',
    demo: 'https://todo-mern-pb.vercel.app/',
    status: 'completed',
  },
  {
    title: 'Roadmap Backend',
    blurbKey: 'projects.roadmap_backend.blurb',
    tags: ['REST API', 'Node.js', 'Express'],
    year: '2025',
    gradient: 'from-violet-500/15 via-transparent to-fuchsia-500/10',
    pattern: 'dots',
    github: 'https://github.com/patrik-bajzik/roadmap-backend',
    status: 'completed',
  },
];

function Pattern({kind}: { kind: string }) {
  if (kind === 'grid')
    return (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(var(--pattern-line) 1px, transparent 1px), linear-gradient(90deg, var(--pattern-line) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
    );
  if (kind === 'dots')
    return (
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(var(--pattern-dot) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
    );
  if (kind === 'lines')
    return (
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'repeating-linear-gradient(115deg, var(--pattern-line) 0 1px, transparent 1px 14px)',
        }}
      />
    );
  return (
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          'radial-gradient(circle at 30% 30%, var(--pattern-dot), transparent 40%), radial-gradient(circle at 70% 70%, var(--pattern-line), transparent 40%)',
      }}
    />
  );
}

function StatusTag({status}: { status: ProjectStatus }) {
  const {t} = useI18n();
  const isActive = status === 'active';

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider backdrop-blur-md',
        isActive
          ? 'border border-amber-400/40 bg-amber-500/15 text-amber-600 dark:text-amber-300'
          : 'border border-border-strong bg-surface/80 text-content',
      ].join(' ')}
    >
      {isActive && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75"/>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500"/>
        </span>
      )}
      {isActive ? t('projects.status.active') : t('projects.status.completed')}
    </span>
  );
}

export function Projects() {
  const {ref, visible} = useReveal();
  const {t} = useI18n();

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent-soft">{t('projects.label')}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent"/>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2
              className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-content-strong sm:text-4xl md:text-5xl"
            >
              {t('projects.title')}{' '}
              <span className="font-display italic text-content-muted">{t('projects.titleAccent')}</span>
            </h2>
            <p className="text-sm text-content-faint">{t('projects.subtitle')}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="card-glow group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 transition-all duration-500 hover:border-border-strong hover:bg-surface-hover"
              >
                {/* Visual */}
                <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-bg-elevated">
                  {p.image ? (
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{backgroundImage: `url(${p.image})`}}
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}/>
                      <Pattern kind={p.pattern}/>
                    </>
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 via-transparent to-transparent"/>

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span
                      className="rounded-full border border-border-strong bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-content backdrop-blur-md">
                      {p.year}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-content-strong">{p.title}</h3>
                    {p.status && <StatusTag status={p.status}/>}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-content-muted">{t(p.blurbKey)}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-surface-2/40 px-2.5 py-1 font-mono text-[11px] text-content-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 border-t border-border pt-5">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/40 px-3.5 py-2 text-xs font-medium text-content-muted transition-all hover:border-border-strong hover:bg-surface-hover hover:text-content-strong"
                      >
                        <FaGithub size={14}/>
                        {t('projects.code')}
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/40 px-3.5 py-2 text-xs font-medium text-content-muted transition-all hover:border-border-strong hover:bg-surface-hover hover:text-content-strong"
                      >
                        {t('projects.demo')}
                        <GoArrowUpRight
                          size={14}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
