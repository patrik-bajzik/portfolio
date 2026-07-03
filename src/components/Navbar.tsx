import {useEffect, useState} from 'react';
import {FaGithub} from "react-icons/fa";
import {CiLinkedin, CiMail} from "react-icons/ci";
import {useI18n} from "../hooks/useI18n.ts";
import {ThemeToggle} from './ThemeToggle';
import {LanguageSwitcher} from './LanguageSwitcher';
import type {TranslationKey} from '../i18n/translations';
import profilePicture from "../assets/fotka-mna-anime-mikina.png";

const linkKeys: { key: TranslationKey; href: string }[] = [
  {key: 'nav.about', href: '#about'},
  {key: 'nav.stack', href: '#stack'},
  {key: 'nav.work', href: '#work'},
  {key: 'nav.contact', href: '#contact'},
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const {t} = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-3">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled
              ? 'glass-strong border border-border shadow-2xl shadow-black/20'
              : 'border border-transparent'
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <img
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              src={profilePicture}
              alt="Profile Image"
            />
            <span
              className="text-sm font-medium tracking-tight text-content-muted transition-colors group-hover:text-content-strong">
              Patrik Bajzík
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {linkKeys.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm text-content-muted transition-colors hover:bg-surface-hover hover:text-content-strong"
              >
                {t(l.key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <div className="block">
              <LanguageSwitcher />
            </div>
            <ThemeToggle />
            <span className="mx-1 hidden h-5 w-px bg-border sm:block"/>
            <a
              href="https://github.com/patrik-bajzik"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={`hidden h-9 w-9 items-center justify-center rounded-lg text-content-muted transition-all`
                + ` hover:bg-surface-hover hover:text-content-strong sm:flex`}
            >
              <FaGithub size={17}/>
            </a>
            <a
              href="https://sk.linkedin.com/in/patrik-bajzik"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-content-muted transition-all hover:bg-surface-hover hover:text-content-strong sm:flex"
            >
              <CiLinkedin size={17}/>
            </a>
            <a
              href="mailto:bajzik.patrik6@gmail.com"
              aria-label="Email"
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-content-muted transition-all hover:bg-surface-hover hover:text-content-strong sm:flex"
            >
              <CiMail size={17}/>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

