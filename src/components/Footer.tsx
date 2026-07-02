import { Mail } from 'lucide-react';
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useI18n } from '../i18n/I18nContext';

export function Footer() {
    const { t } = useI18n();

    return (
        <footer className="relative border-t border-border py-12">
            <div className="mx-auto max-w-6xl px-5">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-cyan text-xs font-bold text-white">
              PB
            </span>
                        <span className="text-sm text-content-muted">{t('footer.role')}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <a href="https://github.com/patrik-bajzik" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg text-content-faint transition-colors hover:bg-surface-hover hover:text-content-strong">
                            <GithubOutlined size={16} />
                        </a>
                        <a href="https://sk.linkedin.com/in/patrik-bajzik" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg text-content-faint transition-colors hover:bg-surface-hover hover:text-content-strong">
                            <LinkedinOutlined size={16} />
                        </a>
                        <a href="mailto:patrik@bajzik.sk" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-lg text-content-faint transition-colors hover:bg-surface-hover hover:text-content-strong">
                            <Mail size={16} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-content-faint sm:flex-row">
                    <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
                    <p className="font-mono">{t('footer.tagline')}</p>
                </div>
            </div>
        </footer>
    );
}
