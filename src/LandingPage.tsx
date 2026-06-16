import { useState, useId } from 'react';
import type { ReactNode } from 'react';

type Differentiator = {
  title: string;
  eyebrow: string;
  description: string;
  className: string;
  tone: 'blue' | 'orange' | 'green';
  visual: 'ib' | 'bilingual' | 'swim' | 'robotics';
};

type Level = {
  name: string;
  years: string;
  title: string;
  description: string;
  points: string[];
  color: string;
};

const brand = {
  lime: '#A6CE39',
  orange: '#F7941D',
  blue: '#2EA8DF',
  royal: '#2F80C4',
  navy: '#17118A',
  ink: '#252525',
};

const WA_NUMBER = '528111881557';
const WA_ADMISIONES = `https://wa.me/${WA_NUMBER}?text=Hola%20INRL%2C%20quiero%20informes%20de%20admisiones%202026`;
const WA_RECORRIDO = `https://wa.me/${WA_NUMBER}?text=Hola%20INRL%2C%20quiero%20agendar%20un%20recorrido`;

const differentiators: Differentiator[] = [
  {
    title: 'Bachillerato Internacional (IB)',
    eyebrow: 'Proyección universitaria',
    description:
      'Una cultura académica que desarrolla investigación, pensamiento crítico y comunicación global para que cada alumno llegue mejor preparado a su siguiente etapa.',
    className: 'md:col-span-2 md:min-h-[390px]',
    tone: 'blue',
    visual: 'ib',
  },
  {
    title: 'Inmersión bilingüe',
    eyebrow: 'Mentalidad multicultural',
    description:
      'El inglés se vive como herramienta diaria para comprender, argumentar y conectar con el mundo.',
    className: 'md:min-h-[390px]',
    tone: 'green',
    visual: 'bilingual',
  },
  {
    title: 'Natación y deporte',
    eyebrow: 'Disciplina integral',
    description:
      'Rutinas deportivas que fortalecen salud, seguridad personal, constancia y caracter competitivo.',
    className: 'md:min-h-[360px]',
    tone: 'orange',
    visual: 'swim',
  },
  {
    title: 'Laboratorio Tech & Robótica LEGO',
    eyebrow: 'Lógica desde la infancia',
    description:
      'Experiencias prácticas en tecnología, programación y prototipado para transformar la curiosidad en soluciones reales.',
    className: 'md:col-span-2 md:min-h-[360px]',
    tone: 'blue',
    visual: 'robotics',
  },
];

const levels: Level[] = [
  {
    name: 'Preescolar',
    years: 'Primeros años',
    title: 'Un inicio seguro, sensorial y profundamente acompañado.',
    description:
      'Ambientes preparados para descubrir lenguaje, movimiento, autonomía y vínculos afectivos con una rutina clara para cada familia.',
    points: ['Exploración guiada', 'Desarrollo socioemocional', 'Rutinas bilingües naturales'],
    color: brand.lime,
  },
  {
    name: 'Primaria',
    years: 'Indagación central',
    title: 'Aprendizaje basado en preguntas que construyen criterio.',
    description:
      'Los alumnos investigan, contrastan ideas y comunican hallazgos con profundidad. La indagación conecta ciencias, lectura, tecnología y vida cotidiana.',
    points: ['Proyectos interdisciplinarios', 'Lectura crítica', 'Robótica y pensamiento computacional'],
    color: brand.orange,
  },
  {
    name: 'Secundaria',
    years: 'Rumbo internacional',
    title: 'Exigencia académica con visión universitaria temprana.',
    description:
      'Una etapa de mayor autonomía, argumentación y disciplina académica, alineada con el perfil internacional del colegio.',
    points: ['Investigación formal', 'Preparación IB', 'Deporte y liderazgo personal'],
    color: brand.royal,
  },
];

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3.25 9H14.5M10.25 4.75L14.5 9L10.25 13.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = '', gradientId }: { className?: string; gradientId: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="-2.73 0 1225.016 1225.016" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="609.77" y1="1190.114" x2="609.77" y2="21.084">
          <stop offset="0" stopColor="#20b038"/>
          <stop offset="1" stopColor="#60d66a"/>
        </linearGradient>
      </defs>
      <path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"/>
      <path fill={`url(#${gradientId})`} d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"/>
      <path fillRule="evenodd" clipRule="evenodd" fill="#FFF" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"/>
      <path fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"/>
    </svg>
  );
}

function VisualMark({ type, tone }: { type: Differentiator['visual']; tone: Differentiator['tone'] }) {
  const color = tone === 'orange' ? brand.orange : tone === 'green' ? brand.lime : brand.blue;

  if (type === 'robotics') {
    return (
      <div className="md:absolute md:bottom-7 md:right-7 flex-shrink-0 grid grid-cols-3 gap-2 rounded-2xl border border-white/40 bg-white/60 p-3 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="h-6 w-6 rounded-[6px] border border-white/80 shadow-md"
            style={{ backgroundColor: index % 2 === 0 ? brand.blue : brand.orange }}
          />
        ))}
      </div>
    );
  }

  if (type === 'swim') {
    return (
      <div className="md:absolute md:bottom-7 md:right-7 flex-shrink-0 flex h-20 w-28 items-center justify-center rounded-2xl border border-white/40 bg-[#F8F9FA]/80 p-2 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
        <svg className="h-full w-full" viewBox="0 0 180 120" fill="none" aria-hidden="true">
          <path d="M8 76C30 56 50 98 72 76C94 54 116 98 138 76C150 64 162 66 174 76" stroke={brand.blue} strokeWidth="10" strokeLinecap="round" />
          <path d="M8 100C30 80 50 122 72 100C94 78 116 122 138 100C150 88 162 90 174 100" stroke={brand.orange} strokeWidth="10" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === 'bilingual') {
    return (
      <div
        className="md:absolute md:bottom-7 md:right-7 flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/60 font-sans text-2xl font-extrabold tracking-tight shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105"
        style={{ color }}
      >
        EN
      </div>
    );
  }

  return (
    <div className="md:absolute md:bottom-7 md:right-7 flex-shrink-0 h-20 w-20 rounded-full border border-white/40 bg-white/60 p-2.5 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
      <div
        className="grid h-full w-full place-items-center rounded-full border font-sans text-2xl font-extrabold tracking-tight shadow-inner"
        style={{ borderColor: `${color}33`, color }}
      >
        IB
      </div>
    </div>
  );
}

function FadeSection({ children, className = '', id, labelId }: { children: ReactNode; className?: string; id?: string; labelId?: string }) {
  return (
    <section
      id={id}
      aria-labelledby={labelId}
      className={`translate-y-0 motion-safe:animate-[fadeUp_0.7s_ease-out_both] opacity-100 ${className}`}
    >
      {children}
    </section>
  );
}

export default function LandingPage() {
  const [activeLevel, setActiveLevel] = useState(levels[1]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const waCtaGradientId = useId();
  const waFloatGradientId = useId();

  const heroHeadingId = useId();
  const diferHeadingId = useId();
  const nivelesHeadingId = useId();
  const galeriaHeadingId = useId();
  const procesoHeadingId = useId();
  const preguntasHeadingId = useId();
  const admisionesHeadingId = useId();

  const faqs = [
    {
      question: '¿El Instituto Nuevo Reino de León es laico y mixto?',
      answer: 'Sí, somos una institución completamente laica y mixta. Promovemos una formación basada en valores humanos universales, el respeto a la diversidad y el pensamiento crítico.'
    },
    {
      question: '¿Cómo funciona el Bachillerato Internacional (IB) y qué ventajas ofrece?',
      answer: 'El IB es un marco curricular de prestigio mundial que fomenta la indagación, la investigación independiente y la mentalidad global. Prepara a los alumnos no solo para el éxito universitario en México o el extranjero, sino para resolver problemas complejos del mundo real.'
    },
    {
      question: '¿Cuál es el enfoque en idiomas y robótica?',
      answer: 'Nuestra educación es bilingüe (español/inglés) con inmersión diaria. Además, integramos la robótica educativa usando la metodología oficial de LEGO Education desde niveles básicos, impulsando el desarrollo del pensamiento computacional, la lógica y el trabajo colaborativo.'
    },
    {
      question: '¿La natación es obligatoria y qué instalaciones tienen?',
      answer: 'Sí, la natación forma parte de nuestra currícula de Educación Física para el desarrollo psicomotriz integral. Contamos con una alberca semiolímpica techada y climatizada dentro de nuestras instalaciones del plantel Apodaca, con instructores certificados.'
    },
    {
      question: '¿Cuentan con servicio de transporte escolar y horario extendido?',
      answer: 'Sí, ofrecemos un servicio de transporte escolar con unidades seguras y monitoreadas que cubren rutas estratégicas en Apodaca y zonas aledañas. También contamos con programas de actividades extraescolares vespertinas y opción de horario extendido.'
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAFAFA] font-sans text-[#252525]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── HERO ── */}
      <FadeSection id="inicio" labelId={heroHeadingId} className="relative min-h-[760px] bg-[#F8F9FA]">
        <header className="sticky top-0 z-30 bg-[#F8F9FA]/90 backdrop-blur-sm border-b border-[#252525]/5">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-5 py-5 sm:px-8 lg:px-10">
            <a href="#inicio" className="group flex flex-shrink-0 items-center gap-4 transition-transform duration-300 active:scale-[0.97]" aria-label="Instituto Nuevo Reino de León — Inicio">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-lg font-bold text-[#17118A] shadow-sm ring-1 ring-[#17118A]/10 transition-transform duration-500 group-hover:scale-105">
                IN
              </span>
              <span className="text-lg font-bold leading-none tracking-tight text-[#17118A] sm:text-xl whitespace-nowrap">
                Instituto Nuevo Reino de León
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-x-6 xl:gap-x-8 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#17118A] xl:flex" aria-label="Navegación principal">
              <a className="hover:text-[#F7941D] whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded active:scale-[0.97]" href="#diferenciadores">Nosotros</a>
              <a className="hover:text-[#F7941D] whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded active:scale-[0.97]" href="#niveles">Oferta Educativa</a>
              <a className="hover:text-[#F7941D] whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded active:scale-[0.97]" href="#galeria">Instalaciones</a>
              <a className="hover:text-[#F7941D] whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded active:scale-[0.97]" href="#proceso">Admisiones</a>
              <a className="hover:text-[#F7941D] whitespace-nowrap transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded active:scale-[0.97]" href="#preguntas">Preguntas Frecuentes</a>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="xl:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#17118A]/15 bg-white text-[#17118A] shadow-sm transition-colors duration-300 hover:bg-[#17118A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu panel */}
          {mobileMenuOpen && (
            <nav
              id="mobile-menu"
              aria-label="Navegación móvil"
              className="xl:hidden border-t border-[#252525]/8 bg-white px-5 py-4 flex flex-col gap-1"
            >
              {[
                ['#diferenciadores', 'Nosotros'],
                ['#niveles', 'Oferta Educativa'],
                ['#galeria', 'Instalaciones'],
                ['#proceso', 'Admisiones'],
                ['#preguntas', 'Preguntas Frecuentes'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#17118A] hover:bg-[#F8F9FA] hover:text-[#F7941D] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-28 pt-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:pt-16 items-center">
          <div className="flex flex-col items-start justify-center">
            <p className="text-2xl font-extrabold tracking-tight text-black md:text-4xl">
              Asciende y Trasciende
            </p>
            <h1
              id={heroHeadingId}
              className="mt-12 max-w-5xl text-5xl font-black leading-[1.0] tracking-tight text-[#17118A] sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Educación con perspectiva internacional y{' '}
              <span className="text-[#00A651]">consciencia humana</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#252525]/80 md:text-xl">
              22 años de excelencia en Monterrey con educación laica, bilingüe, modelo
              constructivista y certificación de Bachillerato Internacional.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#proceso"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F7941D] px-7 text-sm font-bold text-white shadow-sm transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#e68210] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2"
              >
                Agendar Recorrido por el Campus
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#niveles"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#17118A]/20 bg-white/60 px-7 text-sm font-bold text-[#17118A] shadow-sm backdrop-blur transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17118A] focus-visible:ring-offset-2"
              >
                Explorar Niveles
              </a>
            </div>
          </div>

          <aside className="relative h-fit overflow-hidden rounded-[2rem] border border-[#252525]/10 bg-white shadow-sm lg:mt-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(46,168,223,0.08),transparent_46%)]" />
            <div className="relative z-10 p-8 text-[#17118A] md:p-10">
              <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em]">Plantel Apodaca</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { value: '2004', label: 'Fundación', color: brand.navy },
                  { value: 'IB', label: 'Bachillerato Internacional', color: brand.blue },
                  { value: 'LEGO', label: 'Robótica educativa', color: brand.blue },
                  { value: 'Natación', label: 'Disciplina deportiva', color: brand.orange },
                ].map(({ value, label, color }) => (
                  <div key={label} className="rounded-[1.2rem] border border-[#252525]/10 bg-[#F8F9FA] p-4 shadow-sm transition-[transform,background-color] duration-500 hover:-translate-y-0.5 hover:bg-white active:scale-[0.97]">
                    <strong className="block text-3xl font-black tracking-tight truncate" style={{ color }}>
                      {value}
                    </strong>
                    <span className="mt-1 block text-xs font-semibold leading-4 text-[#252525]/60">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <svg className="absolute -bottom-24 left-0 z-0 h-64 w-full text-[#FAFAFA]" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 80C250 124 438 148 667 146C930 144 1165 118 1440 0V220H0V80Z" fill="currentColor" />
          <path d="M56 142C290 174 481 166 665 148C911 124 1112 92 1310 116" stroke="#F7941D" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.4" />
          <path d="M620 162C779 176 937 172 1167 150" stroke="#A6CE39" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.4" />
        </svg>
      </FadeSection>

      {/* ── DIFERENCIADORES ── */}
      <FadeSection id="diferenciadores" labelId={diferHeadingId} className="relative mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#A6CE39]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#F7941D]">
              Diferenciadores
            </span>
          </div>
          <h2
            id={diferHeadingId}
            className="text-4xl font-black leading-[1.05] tracking-tight text-[#17118A] md:text-5xl lg:text-6xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Robótica, educación bilingüe y <span className="text-[#2EA8DF]">excelencia académica</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {differentiators.map((item) => {
            const color = item.tone === 'orange' ? brand.orange : item.tone === 'green' ? brand.lime : brand.blue;
            const isWide = item.className.includes('md:col-span-2');

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-[#252525]/10 bg-white p-8 shadow-sm transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(46,168,223,0.1)] ${item.className}`}
              >
                <div className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: color }} />
                {/* En móvil: eyebrow arriba, luego fila con título+decorativo, luego descripción */}
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color }}>
                  {item.eyebrow}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <h3 className={`text-3xl font-black leading-tight tracking-tight text-[#17118A] md:text-4xl ${isWide ? 'md:max-w-[62%]' : ''}`} style={{ textWrap: 'balance' } as React.CSSProperties}>
                    {item.title}
                  </h3>
                  <div className="md:hidden flex-shrink-0">
                    <VisualMark type={item.visual} tone={item.tone} />
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#252525]/70 md:max-w-[62%]">{item.description}</p>
                <div className="hidden md:block">
                  <VisualMark type={item.visual} tone={item.tone} />
                </div>
              </article>
            );
          })}
        </div>
      </FadeSection>

      {/* ── NIVELES ── */}
      <FadeSection id="niveles" labelId={nivelesHeadingId} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 rounded-[2rem] border border-[#252525]/10 bg-[#FAFAFA] p-5 shadow-inner md:grid-cols-[0.42fr_0.58fr] md:p-8 lg:p-10">
          <div>
            <h2
              id={nivelesHeadingId}
              className="text-4xl font-black leading-tight tracking-tight text-[#17118A] md:text-6xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Etapas conectadas por una misma visión.
            </h2>
            <div
              role="tablist"
              aria-label="Niveles educativos"
              className="mt-8 flex flex-col gap-3"
            >
              {levels.map((level) => {
                const isActive = activeLevel.name === level.name;
                const panelId = `nivel-panel-${level.name}`;
                const tabId = `nivel-tab-${level.name}`;

                return (
                  <button
                    key={level.name}
                    id={tabId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    onClick={() => setActiveLevel(level)}
                    onMouseEnter={() => setActiveLevel(level)}
                    onFocus={() => setActiveLevel(level)}
                    className="group flex w-full items-center justify-between rounded-2xl border px-6 py-5 text-left text-2xl font-extrabold tracking-tight shadow-sm transition-[transform,box-shadow,background-color,color,border-color] duration-500 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:ring-offset-2"
                    style={{
                      backgroundColor: isActive ? level.color : '#ffffff',
                      borderColor: isActive ? 'transparent' : '#e5e7eb',
                      color: isActive ? '#ffffff' : '#17118A',
                      boxShadow: isActive ? `0 12px 30px ${level.color}33` : undefined,
                    }}
                  >
                    <span>
                      <strong className="block">{level.name}</strong>
                      <span
                        className="block text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-500"
                        style={{ color: isActive ? 'rgba(255, 255, 255, 0.8)' : '#25252570' }}
                      >
                        {level.years}
                      </span>
                    </span>
                    <ArrowIcon
                      className="transition-transform duration-500 group-hover:translate-x-1"
                      style={{ color: isActive ? '#ffffff' : level.color }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {levels.map((level) => {
            const isActive = activeLevel.name === level.name;
            const panelId = `nivel-panel-${level.name}`;
            const tabId = `nivel-tab-${level.name}`;

            return (
              <div
                key={level.name}
                id={panelId}
                role="tabpanel"
                aria-labelledby={tabId}
                hidden={!isActive}
                className="relative overflow-hidden rounded-[1.5rem] bg-white border border-[#252525]/10 p-6 shadow-md md:p-10"
              >
                <svg
                  className="absolute -right-12 top-6 h-72 w-72 transition-colors duration-500"
                  style={{ color: level.color, opacity: 0.18 }}
                  viewBox="0 0 280 280"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M220 32C137 20 58 73 39 154" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                  <path d="M46 232c73 37 162 10 203-61" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <div className="relative z-10">
                  <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em]" style={{ color: level.color }}>
                    {level.name}
                  </p>
                  <h3 className="text-4xl font-black leading-tight tracking-tight text-[#17118A] md:text-5xl lg:text-6xl" style={{ textWrap: 'balance' } as React.CSSProperties}>
                    {level.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#252525]/70">{level.description}</p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    {level.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border bg-white px-5 py-3.5 text-sm font-bold text-[#252525]/85 shadow-sm transition-[transform] duration-500 hover:scale-[1.02] hover:-translate-y-0.5"
                        style={{ borderColor: `${level.color}22` }}
                      >
                        <span className="flex items-start gap-2.5">
                          <span className="mt-[0.38rem] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: level.color }} />
                          <span className="leading-tight">{point}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeSection>

      {/* ── GALERÍA ── */}
      <FadeSection id="galeria" labelId={galeriaHeadingId} className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col items-start gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F7941D]">
            Nuestras Instalaciones
          </span>
          <h2
            id={galeriaHeadingId}
            className="text-4xl font-black leading-[1.05] tracking-tight text-[#17118A] md:text-5xl lg:text-6xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Espacios diseñados para el desarrollo <span className="text-[#00A651]">académico y físico</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#252525]/10 bg-white shadow-sm md:col-span-2 h-[450px] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(46,168,223,0.1)]">
            <img
              src="/images/campus.png"
              alt="Fachada del Campus Instituto Nuevo Reino de León"
              width="900"
              height="450"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block rounded-full bg-[#A6CE39] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#17118A]">
                Plantel Apodaca
              </span>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Fachada Principal</h3>
              <p className="mt-2 text-sm text-white/80 max-w-xl">
                Un entorno seguro y moderno con accesos controlados y espacios arquitectónicos diseñados para inspirar el aprendizaje.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-[#252525]/10 bg-white shadow-sm md:col-span-1 h-[450px] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(46,168,223,0.1)]">
            <img
              src="/images/robotica.png"
              alt="Laboratorio de Robótica LEGO"
              width="450"
              height="450"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block rounded-full bg-[#2EA8DF] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Tecnología
              </span>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Robótica LEGO</h3>
              <p className="mt-2 text-sm text-white/80">
                Aulas equipadas para el diseño, programación y experimentación con metodologías STEM.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-[#252525]/10 bg-white shadow-sm md:col-span-3 h-[350px] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(46,168,223,0.1)]">
            <img
              src="/images/cancha.png"
              alt="Cancha de Fútbol del Instituto Nuevo Reino de León"
              width="1350"
              height="350"
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block rounded-full bg-[#F7941D] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Deportes y Recreación
              </span>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Cancha Deportiva</h3>
              <p className="mt-2 text-sm text-white/80 max-w-2xl">
                Cancha escolar de concreto diseñada para la recreación, clases de educación física, torneos internos de fútbol y básquetbol, fomentando la sana convivencia y el trabajo en equipo.
              </p>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ── PROCESO ── */}
      <FadeSection id="proceso" labelId={procesoHeadingId} className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-16 text-center">
            <h2
              id={procesoHeadingId}
              className="text-4xl font-black leading-tight tracking-tight text-[#17118A] md:text-6xl"
              style={{ textWrap: 'balance' } as React.CSSProperties}
            >
              Proceso de Admisión
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#252525]/70">
              Sigue estos tres sencillos pasos para asegurar la educación internacional de tus hijos en nuestro plantel Apodaca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { num: '01', color: brand.lime, title: 'Agenda una Visita', body: 'Ponte en contacto con nuestro departamento de admisiones vía WhatsApp para programar un recorrido personalizado y conocer las instalaciones.' },
              { num: '02', color: brand.blue, title: 'Valoración e Indagación', body: 'Realizamos una entrevista psicopedagógica y una evaluación diagnóstica para comprender el perfil del alumno, sus fortalezas y necesidades específicas.' },
              { num: '03', color: brand.orange, title: 'Inscripción y Bienvenida', body: 'Entrega de la documentación requerida y pago de inscripción para formalizar el ingreso. ¡Tu familia ya forma parte del Instituto!' },
            ].map(({ num, color, title, body }) => (
              <div key={num} className="group relative rounded-[2rem] border border-[#252525]/10 bg-white p-8 shadow-sm transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(46,168,223,0.08)]">
                <div className="absolute -top-6 -right-2 text-[7rem] font-black leading-none select-none" style={{ color: `${color}1A` }}>
                  {num}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg mb-6" style={{ backgroundColor: `${color}26`, color }}>
                  {parseInt(num)}
                </div>
                <h3 className="text-2xl font-black text-[#17118A] tracking-tight">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#252525]/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* ── FAQ ── */}
      <FadeSection id="preguntas" labelId={preguntasHeadingId} className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <div className="mb-14 text-center">
          <h2
            id={preguntasHeadingId}
            className="text-4xl font-black leading-tight tracking-tight text-[#17118A] md:text-5xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-[#252525]/70 text-lg">
            Todo lo que necesitas saber sobre nuestra propuesta educativa, servicios y admisiones.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[1.5rem] border border-[#252525]/10 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-bold text-[#17118A] hover:bg-[#F8F9FA] transition-colors duration-300 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F7941D]"
                >
                  <span className="pr-4">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 transform text-[#F7941D] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-[max-height,opacity] duration-500 ${isOpen ? 'max-h-[500px] border-t border-[#252525]/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                >
                  <p className="px-6 py-5 text-base leading-relaxed text-[#252525]/75 bg-[#F8F9FA]/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeSection>

      {/* ── CTA ADMISIONES ── */}
      <FadeSection id="admisiones" labelId={admisionesHeadingId} className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#252525]/10 bg-[radial-gradient(120%_120%_at_50%_0%,#ffffff_60%,rgba(46,168,223,0.04)_100%)] bg-white px-6 py-14 shadow-sm md:px-12 md:py-20">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
            <svg className="absolute -right-24 -bottom-24 h-96 w-96 text-[#A6CE39]/30" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="6 8" aria-hidden="true">
              <circle cx="100" cy="100" r="80" />
            </svg>
            <svg className="absolute -left-20 -top-20 h-80 w-80 text-[#2EA8DF]/25" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
              <path d="M 0,100 A 100,100 0 0,1 200,100" />
            </svg>
          </div>
          <span className="relative z-10 mx-auto mb-6 inline-flex rounded-full border border-[#A6CE39]/30 bg-[#A6CE39]/12 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#17118A]">
            Atención inmediata de Admisiones
          </span>
          <h2
            id={admisionesHeadingId}
            className="relative z-10 mx-auto max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#17118A] md:text-6xl lg:text-7xl"
            style={{ textWrap: 'balance' } as React.CSSProperties}
          >
            Admisiones Abiertas Ciclo Escolar 2026
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#252525]/70">
            Agenda una llamada o recorrido por campus. Nuestro equipo puede orientarte sobre niveles,
            cupos, proceso y fechas clave.
          </p>
          <a
            href={WA_ADMISIONES}
            target="_blank"
            rel="noreferrer"
            className="group relative z-10 mx-auto mt-10 inline-flex min-h-[60px] items-center justify-center gap-3.5 rounded-full bg-[#25D366] px-8 text-base font-bold text-[#073B22] shadow-[0_10px_25px_rgba(37,211,102,0.25)] transition-[transform,box-shadow,background-color] duration-500 hover:-translate-y-1 hover:bg-[#20bf5a] hover:shadow-[0_15px_35px_rgba(37,211,102,0.35)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon gradientId={waCtaGradientId} />
            Contactar por WhatsApp Business
            <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </a>
        </div>
      </FadeSection>

      {/* ── FOOTER ── */}
      <footer className="bg-[#17118A] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <a href="#inicio" className="flex items-center gap-4 group transition-transform duration-500 active:scale-[0.97]" aria-label="Instituto Nuevo Reino de León — Inicio">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#17118A] font-bold text-base shadow-sm ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105">
                  IN
                </span>
                <span className="text-lg font-bold leading-none tracking-tight whitespace-nowrap">
                  Instituto Nuevo Reino de León
                </span>
              </a>
              <p className="mt-6 text-base text-white/70 max-w-sm">
                Educación con perspectiva internacional, mentalidad laica e inmersión multicultural desde preescolar hasta secundaria en Apodaca, N.L.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/INSTITUTONUEVOREINODELEON"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-[#F7941D] hover:border-transparent transition-[background-color,border-color] duration-500 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                  aria-label="Síguenos en Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/inrl_site/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:bg-[#F7941D] hover:border-transparent transition-[background-color,border-color] duration-500 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D]"
                  aria-label="Síguenos en Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold uppercase tracking-wider text-[#A6CE39]">
                Enlaces Rápidos
              </h4>
              <ul className="mt-6 space-y-4 text-sm font-semibold">
                {[
                  ['#diferenciadores', 'Nosotros'],
                  ['#niveles', 'Oferta Educativa'],
                  ['#galeria', 'Instalaciones'],
                  ['#proceso', 'Admisiones'],
                  ['#preguntas', 'Preguntas Frecuentes'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="inline-block text-white/70 hover:text-[#F7941D] transition-colors duration-500 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base font-bold uppercase tracking-wider text-[#A6CE39]">
                Contacto
              </h4>
              <ul className="mt-6 space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-[#2EA8DF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Gaspar Castaño de Sosa 1000, Real Hacienda de Huinala,<br />
                    Apodaca, Nuevo León, México, C.P. 66600
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-[#2EA8DF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+528110881557" className="hover:text-[#F7941D] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded">
                    +52 (81) 1088-1557
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-[#2EA8DF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:direccion.garl@inrl.edu.mx" className="hover:text-[#F7941D] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7941D] focus-visible:rounded">
                    direccion.garl@inrl.edu.mx
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>© 2026 Instituto Nuevo Reino de León. Todos los derechos reservados. Plantel Apodaca.</p>
            <div className="flex gap-6">
              <a href="https://www.inrl.edu.mx" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:rounded">inrl.edu.mx</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <a
        href={WA_RECORRIDO}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-[#073B22] shadow-[0_8px_30px_rgba(37,211,102,0.3)] ring-1 ring-white/10 transition-[transform,box-shadow,background-color] duration-500 hover:-translate-y-1 hover:bg-[#20bf5a] hover:shadow-[0_15px_35px_rgba(37,211,102,0.45)] active:scale-[0.97] sm:px-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Contactar por WhatsApp — Agendar recorrido"
      >
        <WhatsAppIcon gradientId={waFloatGradientId} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </main>
  );
}
