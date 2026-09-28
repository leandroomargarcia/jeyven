# Consultora IA y Datos — sitio web

Landing estática y bilingüe (ES/EN) de la consultora. Sin build ni dependencias: HTML, CSS y JavaScript planos.

## Estructura

```
index.html          Estructura de la página y textos fijos (ES/EN en spans .es / .en)
assets/styles.css   Estilos y tokens de color/tipografía (:root)
assets/main.js      Contenido dinámico y lógica
```

En `assets/main.js` están los datos que más se editan:

- `PROBLEMS`: problemas del cliente y cómo se resuelven.
- `SERVICES`: las cuatro verticales y su catálogo (se abre en el panel lateral).
- `CASES`: casos con problema, solución y resultado.

Cada texto tiene su versión `es` y `en`.

## Ver en local

Abrí `index.html` en el navegador, o levantá un servidor:

```bash
python -m http.server 8000
```

## Pendientes

- Nombre y logo definitivos (hoy dice "tu marca").
- Email y ciudad reales en la sección de contacto.
- Conectar el formulario de contacto (hoy solo valida en el navegador y no envía nada), por ejemplo con Formspree o un endpoint propio.
- Dominio y hosting (Vercel, Netlify o GitHub Pages sirven tal cual).
