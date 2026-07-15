# Web oficial de Breda Acció Solidària

Aquest repositori conté el codi font de la web oficial de **Breda Acció Solidària (BAS)**.

La web està desenvolupada amb **Astro** i es publica automàticament a **GitHub Pages** mitjançant **GitHub Actions**. És una web completament estàtica, sense base de dades ni servidor, fet que en facilita el manteniment, la seguretat i el desplegament.

## Característiques

- Desenvolupada amb Astro
- Disseny responsive (ordinador, tauleta i mòbil)
- Continguts editables en Markdown
- Desplegament automàtic amb GitHub Actions
- Sense backend ni gestor de continguts extern
- Lleugera, ràpida i accessible
- Pensada perquè la puguin mantenir diverses persones

---

## Estructura del projecte

```
.
├── public/                 # Recursos estàtics
├── src/
│   ├── components/         # Components reutilitzables
│   ├── content/            # Continguts en Markdown
│   │   ├── actualitat/
│   │   ├── agenda/
│   │   └── campanyes/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── data/
├── .github/workflows/      # GitHub Actions
├── astro.config.mjs
└── package.json
```

---

## Requisits

- Node.js 22 o superior
- npm

Si utilitzeu **nvm**:

```bash
nvm use
```

o, si encara no teniu instal·lada la versió adequada:

```bash
nvm install 22
nvm use
```

---

## Instal·lació

Cloneu el repositori:

```bash
git clone https://github.com/<organització>/<organització>.github.io.git
cd <organització>.github.io
```

Instal·leu les dependències:

```bash
npm install
```

---

## Desenvolupament local

Per iniciar el servidor de desenvolupament:

```bash
npm run dev
```

La web serà accessible a:

```
http://localhost:4321
```

---

## Generar la versió de producció

Per generar la web estàtica:

```bash
npm run build
```

Per visualitzar la versió compilada:

```bash
npm run preview
```

---

## Edició dels continguts

La major part del contingut de la web es troba en fitxers Markdown.

Les principals col·leccions són:

```
src/content/actualitat/
src/content/agenda/
src/content/campanyes/
```

Cada fitxer inclou la informació necessària (títol, data, imatge, etiquetes, etc.) i el contingut de la pàgina.

Per afegir una notícia, una activitat o una campanya normalment només cal crear un nou fitxer Markdown dins de la carpeta corresponent.

---

## Desplegament

Quan els canvis es fusionen a la branca **main**, GitHub Actions compila automàticament la web i la publica a GitHub Pages.

No és necessari generar ni pujar manualment la carpeta `dist`.

---

## Analítica

La web permet integrar **GoatCounter** per obtenir estadístiques de visites sense utilitzar galetes.

Per activar-la només cal definir la variable del repositori:

```
PUBLIC_GOATCOUNTER_ENDPOINT
```

Si aquesta variable no existeix, la web funciona igual però sense registrar estadístiques.

---

## Flux de treball recomanat

Per evitar conflictes quan diverses persones editen la web:

1. Crear una branca nova.
2. Fer els canvis.
3. Comprovar que la web funciona:

```bash
npm run dev
```

4. Comprovar que compila correctament:

```bash
npm run build
```

5. Obrir una *Pull Request*.
6. Revisar els canvis.
7. Fusionar-la a `main`.

---

## Llicència

El **codi font** d'aquest projecte es distribueix sota la llicència **GNU General Public**.

Els **continguts de la web** (textos, fotografies, logotips i altres materials gràfics) són propietat de **Breda Acció Solidària**, llevat que s'indiqui expressament el contrari.
