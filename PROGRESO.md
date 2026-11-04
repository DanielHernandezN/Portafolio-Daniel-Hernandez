# Progreso Portafolio — Nuevo diseño Canva

> Leer este archivo al iniciar sesión para retomar.

## 1. Objetivo
Implementar home nuevo según maqueta:
- `c:\Users\rocks\Downloads\Portafolio web .png` (home)
- `c:\Users\rocks\OneDrive\Escritorio\imgGV\Vistas detalle portafolio.png` (detalle, para fase 2)

Alcance acordado: **home primero**, detalle después.

## 2. Estado actual del código (actualizado 2026-11-04)
- `src/app/page.tsx:1` → home estilo Canva (topbar, hero + SVG montaña, 3 cards, pills, links, contacto). Cards: Guardia Virtual `TypeScript`, S.I.G.E.D `React`, API Tareas `JavaScript`, todas con link interno. Links GitHub/LinkedIn y mailto reales. Contacto con formulario Web3Forms + mailto respaldo.
- `src/app/sobre-mi/page.tsx:1` → página Sobre Mí (foto `public/images/perfil.png`, titular Full-Stack, ubicación Araucanía-Chile, historia en justify + experiencia).
- `src/app/proyectos/guardia-virtual/page.tsx` → detalle con descripción en justify tipo libro + collage 3 capturas + botón GitHub.
- `src/app/proyectos/siged/page.tsx` → detalle con badge "En construcción" + descripción en justify tipo libro + botón GitHub. Sin capturas (proyecto en desarrollo).
- `src/app/proyectos/api-tareas/page.tsx` → detalle con descripción en justify + botón GitHub.
- `src/app/components/contact-form.tsx:6` → formulario Web3Forms con Access Key real, verificado en bandeja 2026-11-04.
- `src/app/layout.tsx:1` → layout base con Geist + `globals.css`.
- `src/app/globals.css:1` → tokens navy (`abyss/panel/line/accent/mist`) en `@theme` Tailwind v4.

## 3. Diseño home (resumen maqueta)
- Fondo navy oscuro (~`#0A1930`), cards `#0F2745`, borde `rgba(130,180,220,0.2)`, acento celeste `#7DD3E0`, texto `#F1F5F9` / `#CBD5E1`.
- Topbar solo `SOBRE MI` + borde inferior.
- Hero 2 col: `DANIEL A. HERNANDEZ NORAMBUENA / FULL-STACK DEVELOPER / Construyo experiencias...` + ilustración SVG montaña/pinos/nodos.
- Divisor → `PROYECTOS DESTACADOS` (3 cards: Guardia Virtual `TypeScript`, S.I.G.E.D `React`, API Tareas `JavaScript`, todas con link interno "Ir a proyecto →") → pills stack (`React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Node.js, SQL, Vercel, GitHub`) → links `GitHub / LinkedIn` con iconos.
- Footer contacto: `Contacto: / Hablemos de tu próximo proyecto + formulario Web3Forms + mailto directo`.

## 4. Plan home
- [x] 1. Tokens navy + tipografía en `globals.css`.
- [x] 2. Topbar `SOBRE MI`.
- [x] 3. Hero + SVG montaña.
- [x] 4. Sección `PROYECTOS DESTACADOS` (3 cards estáticas, sin ruta aún).
- [x] 5. Stack pills + links GitHub/LinkedIn (URLs reales 2026-11-01).
- [x] 6. Footer contacto + botón `Contactar` (`mailto:hernandez.norambuenadaniel@gmail.com`).
- [x] 7. Responsive mobile (cards y hero apilados) + `next build` verde (verificado 2026-11-01, Next 16.3.1).

## 5. Deuda / decisiones abiertas (actualizado 2026-11-04)
- [x] Destino botón `Contactar` → resuelto: formulario Web3Forms con key real + `mailto` respaldo, verificado en bandeja.
- [x] Cards del home → resuelto: todas linkean a `/proyectos/[slug]`.
- [x] Guardia Virtual: capturas en `public/images/guardia-virtual/` listas.
- [ ] SIGED: sin capturas — bloqueado porque el proyecto sigue en construcción (badge agregado).
- [ ] API Tareas: sin capturas (API REST, no requiere por ahora).

## 6. Dónde retomar
Portafolio funcional y verificable. Solo queda cierre: verificación responsive + links + deploy Vercel.

## 8. Detalle Guardia Virtual (2026-11-01)
- [x] Fotos copiadas a `public/images/guardia-virtual/` (`login.png` 1636x896, `dashboard.png` 1912x910, `admin.png` 1865x897).
- [x] Ruta `src/app/proyectos/guardia-virtual/page.tsx` (título, subtítulo, tecnologías, collage 3 capturas, botón Volver).
- [x] Tarjeta Guardia Virtual del home enlaza a `/proyectos/guardia-virtual` ("Ir a proyecto →", interno, sin exponer login).
- [x] Botón inferior "Ver GitHub" → repo `guardiavirtual` (2026-11-01). El link superior "← Volver a proyectos" se mantiene para navegar.

## 9. Detalle SIGED (2026-11-01)
- [x] Ruta `src/app/proyectos/siged/page.tsx` (título, subtítulo, tecnologías, botón Ver GitHub → repo `siged`).
- [x] Tarjeta SIGED del home enlaza a `/proyectos/siged`.
- [x] Badge "En construcción" agregado al detalle (2026-11-04) — proyecto aún sin capturas porque sigue en desarrollo.
- Nota: el repo tiene deploy en Vercel pero sigue en creación — no agregar botón demo por ahora (2026-11-01).

## 10. API Tareas como tercer proyecto (2026-11-01)
- [x] Tarjeta "Exploraciones UX/UI" reemplazada por "API Tareas" (`JavaScript`) en el home.
- [x] Ruta `src/app/proyectos/api-tareas/page.tsx` (Node.js + Express, botón Ver GitHub).

## 11. Formulario de contacto (2026-11-01)
- [x] `src/app/components/contact-form.tsx` (nombre, correo, mensaje; estados envío/éxito/error, paleta navy).
- [x] Sección Contacto del home: formulario + `mailto` de respaldo.
- [x] Access Key Web3Forms configurada en `contact-form.tsx:6` (2026-11-04).

## 7. Página Sobre Mí (2026-11-01)
- [x] Ruta `src/app/sobre-mi/page.tsx` (foto + historia + experiencia, mismo sistema navy).
- [x] Topbar del home enlaza a `/sobre-mi`.
- [x] Foto real en `public/images/perfil.png` (retrato fondo limpio, 2026-11-01).
- [x] Textos de historia con versión final del dueño (2026-11-01).
- [x] Ubicación "Desde la Región de La Araucanía, Chile — para el mundo." + titular Full-Stack (2026-11-04).
- [x] Historia en `text-justify` estilo libro (2026-11-04).
- Nota Guardia Virtual: no exponer link (pide login). Mostrar con fotos en fase 2; link a GitHub cuando el repo sea visible.

## 12. Unificación tipográfica y cierre (2026-11-04)
- [x] Descripciones Guardia Virtual, SIGED y API Tareas en `text-justify text-lg` estilo libro.
- [x] `PROGRESO.md` actualizado (estado código, stack real, deuda resuelta).
