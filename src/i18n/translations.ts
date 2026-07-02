export type Locale = 'sk' | 'en';

export type TranslationKey = keyof typeof translations.en;

export const translations = {
    sk: {
        // Nav
        'nav.about': 'O mne',
        'nav.stack': 'Stack',
        'nav.work': 'Práca',
        'nav.contact': 'Kontakt',

        // Hero
        'hero.badge': 'Dostupný pre nové príležitosti',
        'hero.titleLine1': 'Tvorím softvér',
        'hero.titleAccent': 'ktorý pôsobí',
        'hero.titleLine2': 'prirodzene.',
        'hero.intro': "Som {name}, full-stack programátor a softvérový vývojár so sídlom na Slovensku. Môj cieľ je tvoriť softvérové produkty, ktoré si každý obľúbi — s posadnutosťou k perfekcionalizmu, čistým a škálovateľným kódom, kde sa inžinierstvo stretáva s návrhom.",
        'hero.cta.work': 'Pozrieť vybranú prácu',
        'hero.cta.contact': 'Kontaktovať',
        'hero.stat.projects': 'Produkčné projekty',
        'hero.stat.repos': 'Verejných repozitárov',
        'hero.stat.roadmap': 'Roadmap dokončených projektov',
        'hero.stat.years': 'Roky programovania',

        // About
        'about.label': '01 — O mne',
        'about.title': 'Premieňam nápady na',
        'about.titleAccent': 'softvér, ktorý',
        'about.titleEnd': 'ľudia obľúbia.',
        'about.p1': "Moja programátorská cesta začala v raných tínedžerských rokoch a odvtedy tvorím — od malých skriptov po full-stack aplikácie. Som vášnivý pre tvorbu softvéru, ktorý nielen plynule funguje, ale aj poteší používateľov.",
        'about.p2': 'Moje skúsenosti pokrývajú front-end aj back-end vývoj. Na backende pracujem so Spring Bootom (Java) alebo Node.js (Express.js), na frontende používam React a Next.js s TypeScriptom. Záleží mi na čistej architektúre, OOP návrhových vzoroch a budovaní informačných systémov od nuly.',
        'about.p3': "Najnovšie som pôsobil ako AI Produkt Vývojár v Slovenskej sporiteľni, kde som udržiaval Streamlit-based Python webovú aplikáciu, budoval Power BI dashboardy a navrhoval dátové pipelines. Keď nekodím, zvyčajne skúmam nové technológie alebo čítam dokumentáciu.",
        'about.pillar.engineering.title': 'Inžinierstvo',
        'about.pillar.engineering.body': 'Píšem kód, ktorý sa číta ako próza — typovaný, testovaný a stavaný tak, aby prežil pôvodný zámer.',
        'about.pillar.architecture.title': 'Architektúra',
        'about.pillar.architecture.body': 'Od monolitov po informačné systémy — navrhujem hranice, ktoré škálujú s tímom aj s požiadavkami.',
        'about.pillar.craft.title': 'Remeslo',
        'about.pillar.craft.body': 'Zameriavam sa na kvalitu kódu a čistú štruktúru projektu.',

        // Technologies
        'tech.label': '02 — Stack',
        'tech.title': 'Nástroje, po ktorých siaham',
        'tech.titleAccent': 'bez rozmýšľania.',
        'tech.subtitle': 'Pragmatický toolkit vybrúsený naprieč produkčnými systémami — vybraný pre spoľahlivosť, nie novotu.',
        'tech.java.desc': 'JVM, konkurencia, dlho bežiace služby',
        'tech.springboot.desc': 'Produkčné API a informačné systémy',
        'tech.react.desc': 'Architektúra komponentov, stav',
        'tech.typescript.desc': 'Typy ako dokumentácia',
        'tech.tailwind.desc': 'Dizajn systémov bleskovo',
        'tech.docker.desc': 'Reprodukovateľné prostredia',
        'tech.postgresql.desc': 'Relačné modelovanie, ladenie dotazov',
        'tech.git.desc': 'História ako komunikačný nástroj',
        'tech.linux.desc': 'Shell, kernel, spôsob života',

        // Projects
        'projects.label': '03 — Práca',
        'projects.title': 'Vybrané projekty,',
        'projects.titleAccent': 'stavané na trvalo.',
        'projects.subtitle': 'Malá vzorka. Viac na GitHube.',
        'projects.helix.blurb': 'Distribuovaný plánovač úloh spracúvajúci 2M+ udalostí/deň s exactly-once sémantikou a latenciou plánovania pod 100ms.',
        'projects.atlas.blurb': 'Headless knižnica komponentov poháňajúca tri interné dashboardy. Plne typovaná, tree-shakeable, a11y-first.',
        'projects.forge.blurb': 'CLI nástroj, ktorý generuje produkčne-ready mikroslužby z jedného konfiguračného súboru. Prijalo 40+ inžinierov.',
        'projects.lumen.blurb': 'Real-time observability vrstva, ktorá premieňa plány Postgres dotazov na zrozumiteľné výkonnostné príbehy.',
        'projects.code': 'Kód',
        'projects.demo': 'Živé demo',

        // Contact
        'contact.label': '04 — Kontakt',
        'contact.title': 'Postavme niečo',
        'contact.titleAccent': 'čo stojí za to.',
        'contact.body': 'Vždy som otvorený diskusii o nových projektoch, kreatívnych nápadoch alebo príležitostiach byť súčasťou vašich vízií. Či už je to full-stack aplikácia, backendová služba alebo dátový pipeline — rád sa dozviem viac.',
        'contact.cta': 'Začať konverzáciu',
        'contact.email.label': 'Email',
        'contact.github.label': 'GitHub',
        'contact.linkedin.label': 'LinkedIn',
        'contact.discord.label': 'Discord',

        // Footer
        'footer.role': 'Patrik Bajzík — Full-stack vývojár',
        'footer.rights': 'Patrik Bajzík. Všetky práva vyhradené.',
        'footer.tagline': 'Dizajnované a postavené s presnosťou.',
    },

    en: {
        // Nav
        'nav.about': 'About',
        'nav.stack': 'Stack',
        'nav.work': 'Work',
        'nav.contact': 'Contact',

        // Hero
        'hero.badge': 'Available for new opportunities',
        'hero.titleLine1': 'Building software',
        'hero.titleAccent': 'that feels',
        'hero.titleLine2': 'effortless.',
        'hero.intro': "I'm {name}, a full-stack programmer and software developer based in Slovakia. My goal is to create software products that everyone will enjoy — with an obsession for detail, performance, and the spaces where engineering meets design.",
        'hero.cta.work': 'View selected work',
        'hero.cta.contact': 'Get in touch',
        'hero.stat.projects': 'Shipped projects',
        'hero.stat.repos': 'Public repos',
        'hero.stat.roadmap': 'Roadmap finished projects',
        'hero.stat.years': 'Years building',

        // About
        'about.label': '01 — About',
        'about.title': 'I turn ideas into',
        'about.titleAccent': 'software that',
        'about.titleEnd': 'people enjoy.',
        'about.p1': "My programming journey started in my early teens, and since then I've been building — from small scripts to full-stack applications. I'm passionate about creating software that not only functions seamlessly but also delights users.",
        'about.p2': 'My experience spans both front-end and back-end development. I work with Spring Boot and Java on the backend, React and TypeScript on the frontend, and I care deeply about clean architecture, OOP design patterns, and building information systems from scratch.',
        'about.p3': "Most recently I worked as an AI Product Developer at Slovenská sporiteľňa, where I maintained a Streamlit-based Python web app, built Power BI dashboards, and designed data pipelines. When I'm not coding, I'm usually exploring new technologies or contributing to open source.",
        'about.pillar.engineering.title': 'Engineering',
        'about.pillar.engineering.body': 'I write code that reads like prose — typed, tested, and built to outlive the original intent.',
        'about.pillar.architecture.title': 'Architecture',
        'about.pillar.architecture.body': 'From monoliths to information systems, I design boundaries that scale with the team and the requirements.',
        'about.pillar.craft.title': 'Craft',
        'about.pillar.craft.body': 'The terminal is home. I care about the milliseconds, the error messages, and the things users never notice.',

        // Technologies
        'tech.label': '02 — Stack',
        'tech.title': 'Tools I reach for',
        'tech.titleAccent': 'without thinking.',
        'tech.subtitle': 'A pragmatic toolkit honed across production systems — chosen for reliability, not novelty.',
        'tech.java.desc': 'JVM, concurrency, long-running services',
        'tech.springboot.desc': 'Production APIs & information systems',
        'tech.react.desc': 'Component architecture, state',
        'tech.typescript.desc': 'Types as documentation',
        'tech.tailwind.desc': 'Design systems at speed',
        'tech.docker.desc': 'Reproducible environments',
        'tech.postgresql.desc': 'Relational modeling, query tuning',
        'tech.git.desc': 'History as a communication tool',
        'tech.linux.desc': 'The shell, the kernel, the way',

        // Projects
        'projects.label': '03 — Work',
        'projects.title': 'Selected projects,',
        'projects.titleAccent': 'built to last.',
        'projects.subtitle': 'A small sample. More on GitHub.',
        'projects.helix.blurb': 'A distributed job scheduler handling 2M+ events/day with exactly-once semantics and sub-100ms scheduling latency.',
        'projects.atlas.blurb': 'A headless component library powering three internal dashboards. Fully typed, tree-shakeable, a11y-first.',
        'projects.forge.blurb': 'CLI tooling that scaffolds production-ready microservices from a single config file. Adopted by 40+ engineers.',
        'projects.lumen.blurb': 'Real-time observability layer turning Postgres query plans into plain-English performance narratives.',
        'projects.code': 'Code',
        'projects.demo': 'Live demo',

        // Contact
        'contact.label': '04 — Contact',
        'contact.title': "Let's build something",
        'contact.titleAccent': 'worth shipping.',
        'contact.body': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether it's a full-stack application, a backend service, or a data pipeline — I'd love to hear about it.",
        'contact.cta': 'Start a conversation',
        'contact.email.label': 'Email',
        'contact.github.label': 'GitHub',
        'contact.linkedin.label': 'LinkedIn',
        'contact.discord.label': 'Discord',

        // Footer
        'footer.role': 'Patrik Bajzík — Full-Stack Developer',
        'footer.rights': 'Patrik Bajzík. All rights reserved.',
        'footer.tagline': 'Designed & built with precision.',
    },
} as const;

export const localeNames: Record<Locale, string> = {
    sk: 'SK',
    en: 'EN',
};
