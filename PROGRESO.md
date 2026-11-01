# Progreso Portafolio — Nuevo diseño Canva

> Leer este archivo al iniciar sesión para retomar.

## 1. Objetivo
Implementar home nuevo según maqueta:
- `c:\Users\rocks\Downloads\Portafolio web .png` (home)
- `c:\Users\rocks\OneDrive\Escritorio\imgGV\Vistas detalle portafolio.png` (detalle, para fase 2)

Alcance acordado: **home primero**, detalle después.

## 2. Estado actual del código (actualizado 2026-11-01)
- `src/app/page.tsx:1` → home nuevo estilo Canva (topbar, hero + SVG montaña, 3 cards, pills, links, contacto). Links GitHub/LinkedIn y mailto reales.
- `src/app/sobre-mi/page.tsx:1` → página Sobre Mí (foto + historia + experiencia).
- `src/app/layout.tsx:1` → layout base con Geist + `globals.css`.
- `src/app/globals.css:1` → tokens navy (`abyss/panel/line/accent/mist`) en `@theme` Tailwind v4.
- Sin ruta `src/app/proyectos/[slug]/` (se creará en fase 2).

## 3. Diseño home (resumen maqueta)
- Fondo navy oscuro (~`#0A1930`), cards `#0F2745`, borde `rgba(130,180,220,0.2)`, acento celeste `#7DD3E0`, texto `#F1F5F9` / `#CBD5E1`.
- Topbar solo `SOBRE MI` + borde inferior.
- Hero 2 col: `DANIEL A. HERNANDEZ NORAMBUENA / FULL-STACK DEVELOPER / Construyo experiencias...` + ilustración SVG montaña/pinos/nodos.
- Divisor → `PROYECTOS DESTACADOS` (3 cards: Guardia Virtual `React · Supabase`, SIGED `React · face-api.js`, Exploraciones UX/UI `Figma · UX/UI`) → pills stack (`React, JavaScript, TypeScript, Tailwind CSS, Node.js, Supabase, SQL, Figma`) → links `GitHub / LinkedIn`.
- Footer contacto: `Contacto: / Hablemos de tu próximo proyecto + botón Contactar outline`.

## 4. Plan home
- [x] 1. Tokens navy + tipografía en `globals.css`.
- [x] 2. Topbar `SOBRE MI`.
- [x] 3. Hero + SVG montaña.
- [x] 4. Sección `PROYECTOS DESTACADOS` (3 cards estáticas, sin ruta aún).
- [x] 5. Stack pills + links GitHub/LinkedIn (URLs reales 2026-11-01).
- [x] 6. Footer contacto + botón `Contactar` (`mailto:hernandez.norambuenadaniel@gmail.com`).
- [x] 7. Responsive mobile (cards y hero apilados) + `next build` verde (verificado 2026-11-01, Next 16.3.1).

## 5. Deuda / decisiones abiertas
- Destino botón `Contactar` y URLs GitHub/LinkedIn.
- Cards del home: ¿solo visual o ya linkean a `/proyectos/[slug]`? (recomendado: linkear en fase 2).
- Exportar screenshots de proyectos a `public/images/` para fase 2.

## 6. Dónde retomar
Home completo + build verde. Fase 2 en curso: detalle Guardia Virtual.

## 8. Detalle Guardia Virtual (2026-11-01)
- [x] Fotos copiadas a `public/images/guardia-virtual/` (`login.png` 1636x896, `dashboard.png` 1912x910, `admin.png` 1865x897).
- [x] Ruta `src/app/proyectos/guardia-virtual/page.tsx` (título, subtítulo, tecnologías, collage 3 capturas, botón Volver).
- [x] Tarjeta Guardia Virtual del home enlaza a `/proyectos/guardia-virtual` ("Ir a proyecto →", interno, sin exponer login).
- [x] Botón inferior "Ver GitHub" → repo `guardiavirtual` (2026-11-01). El link superior "← Volver a proyectos" se mantiene para navegar.

## 7. Página Sobre Mí (2026-11-01)
- [x] Ruta `src/app/sobre-mi/page.tsx` (foto + historia + experiencia, mismo sistema navy).
- [x] Topbar del home enlaza a `/sobre-mi`.
- [ ] Foto real: colocar en `public/images/perfil.jpg` (ahora referencia un archivo inexistente).
- [ ] Ajustar textos de historia/experiencia con versión final del dueño.
- Nota Guardia Virtual: no exponer link (pide login). Mostrar con fotos en fase 2; link a GitHub cuando el repo sea visible.
