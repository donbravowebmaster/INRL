---
name: Instituto Nuevo Reino de León
description: Sistema de diseño institucional premium, responsivo e internacional.
colors:
  primary: "#17118A"
  secondary: "#2EA8DF"
  accent-lime: "#A6CE39"
  accent-orange: "#F7941D"
  neutral-bg: "#FAFAFA"
  neutral-card: "#FFFFFF"
  ink: "#252525"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Aptos, Inter, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Plus Jakarta Sans, Aptos, Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "16px"
  lg: "32px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent-orange}"
    textColor: "{colors.neutral-card}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "#e68210"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.6)"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
---

# Design System: Instituto Nuevo Reino de León

## 1. Overview

**Creative North Star: "The Elite Academy"**

Un sistema visual que equilibra la seriedad institucional de la academia con la energía vibrante de los acentos lima, naranja y azul cielo. Diseñado para padres de familia que buscan educación de alto nivel en Apodaca, N.L. El diseño es limpio, con tipografía de gran formato que inspira confianza, alineaciones precisas y microinteracciones fluidas.

Rechaza a toda costa el look de plantilla SaaS genérica, el uso de grises lavados y colores planos ultra-pastel que no transmiten la calidez y el dinamismo de una comunidad escolar activa.

**Key Characteristics:**
- Tipografía limpia e internacional (Plus Jakarta Sans)
- Colores institucionales de fuerte presencia (Azul Marino) acentuados con tonos de energía deportiva y tecnológica (Verde Lima, Naranja, Azul Cielo)
- Tarjetas estructuradas con bordes de 1px y sombras sutiles que reaccionan al interactuar
- Enfoque directo en la accesibilidad y alto contraste de lectura

## 2. Colors

La paleta se define en torno al color institucional Azul Marino con acentos coloridos que diferencian las áreas clave (deportes, tecnología, academia).

### Primary
- **Navy Azul Marino** (#17118A): El color base institucional, utilizado en la cabecera, títulos principales y secciones institucionales para denotar prestigio y solidez.

### Secondary
- **Tech Blue** (#2EA8DF): Color de acento para representar la tecnología, informática y robótica LEGO.
- **Lime Green** (#A6CE39): Color de acento para representar la academia, preescolar y los primeros años de educación.
- **Sports Orange** (#F7941D): Color de acento para la disciplina deportiva, recreación y llamados a la acción (CTA).

### Neutral
- **Off-White Canvas** (#FAFAFA): El color de fondo principal de la página, limpio y con excelente contraste.
- **Pure White** (#FFFFFF): El color de fondo de las tarjetas y paneles contenedores.
- **Deep Ink** (#252525): El color del texto del cuerpo, garantizando una relación de contraste superior a 4.5:1.

### Named Rules
**The One Color Accent Rule.** Cada sección debe tener un único color de acento dominante que guíe la atención del usuario a los elementos interactivos o marcas visuales.

## 3. Typography

**Display Font:** "Plus Jakarta Sans" (con "Aptos", "Inter" como fallbacks)
**Body Font:** "Plus Jakarta Sans" (con "Segoe UI", "Helvetica" como fallbacks)

### Hierarchy
- **Display** (Extra Bold / Black, 5xl a 8xl): Utilizado en el título principal del Hero para establecer una presencia impactante y memorable.
- **Headline** (Black, 4xl a 6xl): Utilizado en los títulos de las secciones principales.
- **Title** (Extra Bold, 2xl a 3xl): Utilizado en los títulos de tarjetas y apartados.
- **Body** (Regular, text-base / 16px, line-height 1.625): Utilizado en el texto de lectura principal, con una longitud de línea acotada a un máximo de 75ch.
- **Label** (Bold, text-xs / 12px, letter-spacing 0.12em a 0.22em, uppercase): Utilizado en etiquetas, kickers y menús de navegación.

### Named Rules
**The Readability First Rule.** El interlineado del texto del cuerpo debe ser siempre holgado (mínimo 1.5) y el color de texto debe mantener un contraste nítido con el fondo.

## 4. Elevation

El sistema es mayormente plano por defecto. Se utilizan bordes finos de 1px color gris/tinta muy claro para delimitar las tarjetas, y se aplican sombras suaves y desplazamientos verticales sutiles únicamente en respuesta a estados de interacción (hover, focus, active).

### Shadow Vocabulary
- **Interactive Rise** (`box-shadow: 0 12px 30px rgba(46,168,223,0.1)`): Aplicado a tarjetas activas y botones en hover para dar sensación de elevación física.

### Named Rules
**The Hover-Only Elevation Rule.** Ningún contenedor estático debe flotar con sombras pronunciadas si no es un elemento interactivo o un aviso flotante prioritario.

## 5. Components

### Buttons
- **Shape:** Full Pill (completamente redondeado)
- **Primary (CTA)**: Fondo naranja (#F7941D) con texto blanco y cambio a naranja más oscuro (#e68210) en hover.
- **Secondary**: Borde sutil azul marino (#17118A/20), fondo blanco semi-translúcido (bg-white/60), texto azul marino. En hover, cambia a fondo blanco sólido.
- **WhatsApp Button**: Fondo verde oficial de WhatsApp (#25D366) con texto verde oscuro (#073B22) y un contenedor interno blanco para el logo oficial de WhatsApp para asegurar contraste.

### Cards / Containers
- **Corner Style**: Bordes redondeados de 2rem (32px) para tarjetas grandes y contenedores principales; 1.5rem (24px) para acordeones y tarjetas internas.
- **Background**: Blanco puro (#FFFFFF) sobre fondo gris claro (#FAFAFA).
- **Border**: Borde perimetral fino de 1px (#252525/10).

### Inputs / Fields
- **Style**: Bordes redondeados y contorno sutil.
- **Focus**: Resaltado suave con el color de acento activo.

### Navigation
- **Style**: Cabecera transparente con logo circular blanco que escala suavemente. Enlace activo en color de marca y hover en naranja.

## 6. Do's and Don'ts

### Do:
- **Do** utilizar `flex-wrap` en las etiquetas de los niveles escolares para evitar el solapamiento o compresión del texto en pantallas pequeñas.
- **Do** usar la versión oficial del logo de WhatsApp con respaldo blanco sobre fondos verdes brillantes.
- **Do** definir un único gradiente local y IDs únicos para SVG si se usan múltiples instancias del mismo icono para prevenir errores de renderizado.

### Don't:
- **Don't** reintroducir tipografías serif o cursivas decorativas. Mantener exclusivamente la sans-serif geométrica "Plus Jakarta Sans".
- **Don't** usar sombras oscuras y difusas (`box-shadow` mayor a 16px de desenfoque) junto con bordes de 1px sólidos en elementos estáticos (evitar el efecto "ghost card").
- **Don't** usar texto con gradientes decorativos que comprometa la legibilidad frente al contraste de fondo.
