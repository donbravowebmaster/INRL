# Resumen Técnico — INRL Site

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework UI | React 19 |
| Lenguaje | TypeScript 5.9 |
| Bundler | Vite 8 |
| Estilos | Tailwind CSS v4 (plugin de Vite, sin config file) |
| Package manager | pnpm 11 |
| Repositorio | [github.com/donbravowebmaster/INRL](https://github.com/donbravowebmaster/INRL) |

---

## Arquitectura general

Single Page Application (SPA) de una sola página, sin router ni backend. Todo el contenido y la lógica viven en `src/LandingPage.tsx`. El único estado local son dos variables `useState`: el nivel educativo activo en la sección #niveles y el ítem abierto del acordeón FAQ.

El build genera un solo bundle de ~232 KB JS + ~52 KB CSS (sin comprimir), que baja a ~71 KB + ~9 KB con gzip.

---

## Secciones de la página

### 1. Header / Navegación (`#inicio`)

Barra de navegación **sticky** (fija al hacer scroll) con fondo semitransparente y blur. Contiene:

- **Logotipo** — círculo con las iniciales "IN" en navy + nombre completo del instituto.
- **Nav desktop** — visible solo en pantallas `xl` (≥1280px). Links de anclaje interno a las 5 secciones principales. Hover en naranja (`#F7941D`).
- **Menú hamburguesa** — visible en móvil y tablet. Al hacer clic abre un panel vertical con los mismos enlaces. Se cierra automáticamente al seleccionar una sección.

---

### 2. Hero (`#inicio`)

Sección de bienvenida con layout de dos columnas en desktop (1.25fr izquierda / 0.75fr derecha).

**Columna izquierda:**
- Kicker: *"Asciende y Trasciende"* en negro, tamaño display.
- `<h1>`: *"Educación con perspectiva internacional y consciencia humana"* — tipografía black de 5xl a 8xl según viewport, con `text-wrap: balance`.
- Párrafo descriptivo: 22 años de trayectoria, modelo laico, bilingüe, constructivista e IB.
- Dos botones CTA:
  - **Primario (naranja):** "Agendar Recorrido por el Campus" → ancla a `#proceso`
  - **Secundario (blanco/navy):** "Explorar Niveles" → ancla a `#niveles`

**Columna derecha — Stats card:**
- Card blanco redondeado con gradiente azul sutil.
- Etiqueta "PLANTEL APODACA".
- Grid 2×2 de tarjetas de datos con colores diferenciados por área:
  - **2004** / Fundación — navy
  - **IB** / Bachillerato Internacional — azul (`#2EA8DF`)
  - **LEGO** / Robótica educativa — azul (`#2EA8DF`)
  - **Natación** / Disciplina deportiva — naranja (`#F7941D`)

**Decoración:** SVG de ola en la transición inferior con trazos naranjas y lima.

---

### 3. Diferenciadores (`#diferenciadores`)

Grid de 4 tarjetas que comunican los pilares académicos del colegio. Layout en 3 columnas en desktop con tarjetas anchas (`col-span-2`) para IB y Robótica.

| Tarjeta | Acento | Visual decorativo |
|---------|--------|-------------------|
| Bachillerato Internacional (IB) | Azul | Círculo con texto "IB" |
| Inmersión bilingüe | Lima | Círculo con texto "EN" |
| Natación y deporte | Naranja | Ondas SVG azul/naranja |
| Laboratorio Tech & Robótica LEGO | Azul | Grid de bloques estilo LEGO |

Cada tarjeta tiene:
- Barra de color en el borde superior (acento del área).
- Eyebrow label en el color del acento.
- Título `<h3>` y descripción.
- Elemento visual decorativo absoluto (esquina inferior derecha) que escala en hover.
- Sombra azul suave en hover.

---

### 4. Niveles educativos (`#niveles`)

Sección interactiva con patrón ARIA Tabs. Layout de dos columnas dentro de un card contenedor gris.

**Columna izquierda — Selector de niveles:**
- `<h2>`: *"Etapas conectadas por una misma visión."*
- Tres botones tipo tab (`role="tab"`, `aria-selected`):
  - **Preescolar** — color lima (`#A6CE39`)
  - **Primaria** — color naranja (`#F7941D`) — activo por defecto
  - **Secundaria** — color azul royal (`#2F80C4`)
- Al activarse, el botón toma el color del nivel como fondo con texto blanco y sombra coloreada.

**Columna derecha — Panel de contenido (`role="tabpanel"`):**
Cambia según el nivel seleccionado. Contiene:
- Label coloreado con el nombre del nivel.
- Título descriptivo de la etapa.
- Párrafo de descripción pedagógica.
- Pills de características clave (3 por nivel) con punto de color y borde sutil.
- Decoración SVG de arcos en el color del nivel activo.

| Nivel | Título | Características |
|-------|--------|----------------|
| Preescolar | Un inicio seguro, sensorial y profundamente acompañado. | Exploración guiada, Desarrollo socioemocional, Rutinas bilingües naturales |
| Primaria | Aprendizaje basado en preguntas que construyen criterio. | Proyectos interdisciplinarios, Lectura crítica, Robótica y pensamiento computacional |
| Secundaria | Exigencia académica con visión universitaria temprana. | Investigación formal, Preparación IB, Deporte y liderazgo personal |

---

### 5. Galería de instalaciones (`#galeria`)

Grid de 3 tarjetas fotográficas con imágenes reales del campus. Todas tienen overlay gradiente negro-transparente de abajo hacia arriba, con texto e insignia de categoría superpuestos. Efecto zoom en hover.

| Foto | Tamaño en grid | Badge | Descripción |
|------|---------------|-------|-------------|
| `campus.png` | 2/3 del ancho | Lima — "Plantel Apodaca" | Fachada principal con accesos controlados |
| `robotica.png` | 1/3 del ancho | Azul — "Tecnología" | Laboratorio LEGO STEM |
| `cancha.png` | Ancho completo | Naranja — "Deportes y Recreación" | Cancha de fútbol y básquetbol |

Todas las imágenes tienen `loading="lazy"` y dimensiones explícitas para evitar layout shift (CLS).

---

### 6. Proceso de admisión (`#proceso`)

Sección sobre fondo gris claro (`#F8F9FA`) con tres tarjetas de pasos en grid de 3 columnas.

Cada tarjeta tiene:
- Número decorativo grande (01, 02, 03) en el color del paso con 10% de opacidad.
- Círculo numerado coloreado.
- Título del paso y descripción.

| Paso | Color | Acción |
|------|-------|--------|
| 01 — Agenda una Visita | Lima | Contactar por WhatsApp para recorrido |
| 02 — Valoración e Indagación | Azul | Entrevista psicopedagógica y evaluación diagnóstica |
| 03 — Inscripción y Bienvenida | Naranja | Entrega de documentación y pago de inscripción |

---

### 7. Preguntas Frecuentes (`#preguntas`)

Acordeón de 5 preguntas en columna centrada (`max-w-4xl`). Implementado con `useState` — solo puede estar abierto un ítem a la vez. Cada ítem tiene `aria-expanded` para accesibilidad.

| Pregunta |
|----------|
| ¿El Instituto Nuevo Reino de León es laico y mixto? |
| ¿Cómo funciona el Bachillerato Internacional (IB) y qué ventajas ofrece? |
| ¿Cuál es el enfoque en idiomas y robótica? |
| ¿La natación es obligatoria y qué instalaciones tienen? |
| ¿Cuentan con servicio de transporte escolar y horario extendido? |

---

### 8. CTA de admisiones (`#admisiones`)

Card centrado con fondo radial blanco/azul y decoraciones SVG de círculos y arcos.

Contenido:
- Badge: *"Atención inmediata de Admisiones"*
- `<h2>`: *"Admisiones Abiertas Ciclo Escolar 2026"*
- Párrafo de llamada a la acción.
- Botón primario verde WhatsApp → abre chat directo en `wa.me/528111881557` con mensaje preescrito de admisiones.

---

### 9. Footer

Fondo navy (`#17118A`) con texto blanco. Grid de 4 columnas en desktop.

| Columna | Contenido |
|---------|-----------|
| Col 1 (2/4) | Logo, descripción institucional, iconos de Facebook e Instagram |
| Col 2 | Links de navegación rápida (anclas internas) |
| Col 3 | Dirección, teléfono clickeable, email |
| Col 4 (pie) | Copyright 2026 + link a inrl.edu.mx |

**Redes sociales reales:**
- Facebook: `facebook.com/INSTITUTONUEVOREINODELEON`
- Instagram: `instagram.com/inrl_site/`

**Contacto real:**
- Teléfono: +52 (81) 1088-1557
- Email: direccion.garl@inrl.edu.mx
- Dirección: Gaspar Castaño de Sosa 1000, Real Hacienda de Huinala, Apodaca, N.L., C.P. 66600

---

### 10. Botón flotante de WhatsApp

Botón verde fijo (`position: fixed`, `bottom-6 right-6`, `z-20`) visible en todo momento durante el scroll. Abre chat en `wa.me/528111881557` con mensaje preescrito de recorrido. En desktop muestra la etiqueta "WhatsApp"; en móvil solo el ícono.

---

## Sistema de diseño

### Paleta de colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Navy | `#17118A` | Color institucional principal, header, footer, títulos |
| Tech Blue | `#2EA8DF` | Tecnología, robótica, sombras hover |
| Lime Green | `#A6CE39` | Academia, preescolar, badges |
| Sports Orange | `#F7941D` | Deportes, CTAs, hover de nav |
| Green accent | `#00A651` | Texto de énfasis en hero |
| WhatsApp Green | `#25D366` | Botón WhatsApp |
| Off-white | `#FAFAFA` | Fondo principal de página |
| Pure White | `#FFFFFF` | Fondos de tarjetas |
| Deep Ink | `#252525` | Texto del cuerpo |

### Tipografía

- **Familia:** Plus Jakarta Sans (fallbacks: Aptos, Inter, sans-serif)
- **Display:** Black 900, 5xl–8xl, `leading-[1.0]`, `tracking-tight`
- **Headlines:** Black 900, 4xl–6xl, `text-wrap: balance`
- **Body:** Regular 400, text-base (16px), `leading-relaxed`
- **Labels:** Bold 700, text-xs, uppercase, `tracking-[0.18em]`

### Componentes clave

- **Botón primario:** Pill redondeado, fondo naranja, texto blanco, hover más oscuro + elevación sutil
- **Botón secundario:** Pill, borde navy/20, fondo blanco semitransparente, hover blanco sólido
- **Cards:** `rounded-[2rem]`, borde 1px `#252525/10`, sombra solo en hover (`transition-[transform,box-shadow]`)
- **Hover elevation:** `hover:-translate-y-1` + `hover:shadow-[0_24px_60px_rgba(46,168,223,0.1)]`

### Accesibilidad

- `motion-safe:animate-[fadeUp...]` — animación de entrada omitida con `prefers-reduced-motion`
- `focus-visible:ring-2` en todos los elementos interactivos
- ARIA Tabs completo en sección de niveles
- `aria-labelledby` en todas las secciones
- `aria-expanded` en acordeón FAQ
- `aria-label` en todos los iconos y botones sin texto visible
- Contraste de texto mínimo 4.5:1
