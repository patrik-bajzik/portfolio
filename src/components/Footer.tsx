import {useI18n} from "../hooks/useI18n.ts";
import {FaGithub} from "react-icons/fa";
import {CiLinkedin, CiMail} from "react-icons/ci";
import profilePicture from "../assets/fotka-mna-anime-mikina.png";

export function Footer() {
  const {t} = useI18n();

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              src={profilePicture}
              alt="Profile Image"
            />
            <span className="text-sm text-content-muted">
                            {t('footer.role')}
                        </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a href="https://github.com/patrik-bajzik" target="_blank" rel="noreferrer" aria-label="GitHub"
               className="flex h-9 w-9 items-center justify-center rounded-lg text-content-faint transition-colors hover:bg-surface-hover hover:text-content-strong">
              <FaGithub size={16}/>
            </a>
            <a href="https://sk.linkedin.com/in/patrik-bajzik" target="_blank" rel="noreferrer"
               aria-label="LinkedIn"
               className="flex h-9 w-9 items-center justify-center rounded-lg text-content-faint transition-colors hover:bg-surface-hover hover:text-content-strong">
              <CiLinkedin size={16}/>
            </a>
            <a href="mailto:bajzik.patrik6@gmail.com" aria-label="Email"
               className="flex h-9 w-9 items-center justify-center rounded-lg text-content-faint transition-colors hover:bg-surface-hover hover:text-content-strong">
              <CiMail size={16}/>
            </a>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-content-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="font-mono">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
