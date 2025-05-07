# En Mancha Landing Page

Este proyecto es una landing page para "En Mancha", una plataforma de pedidos de comida para grupos.

## 🚀 Estructura del Proyecto

El proyecto está construido con Astro y Tailwind CSS, y tiene la siguiente estructura:

```text
/
├── public/
│   ├── images/              # Imágenes utilizadas en la página
│   │   ├── features/        # Iconos para la sección de características
│   │   ├── how-woks/        # Imágenes para la sección "Cómo funciona"
│   │   ├── card-foods/      # Imágenes para las tarjetas de comida
│   │   └── restaurants/     # Imágenes para las tarjetas de restaurantes
│   ├── icons/               # Iconos SVG para redes sociales
│   ├── logoFooter.svg       # Logo del footer
│   └── favicon.svg          # Favicon del sitio
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ui/              # Componentes básicos de UI
│   │   │   ├── ImageCard.astro
│   │   │   └── ...
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroBanner.astro
│   │   ├── FoodCardCarousel.astro
│   │   ├── RestaurantCardCarousel.astro
│   │   ├── HowItWorks.astro
│   │   ├── KeyFeatures.astro
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro     # Layout principal con estilos globales
│   └── pages/
│       ├── index.astro      # Página principal
│       ├── ui-components.astro # Página de documentación de componentes UI
│       ├── docs.astro       # Documentación técnica
│       └── examples/        # Páginas de ejemplos de componentes
└── package.json
```

## 📝 Características del Proyecto

- **Diseño Responsivo**: Todos los componentes están optimizados para dispositivos móviles, tablets y escritorio.
- **Componentes Modulares**: El sitio está construido con componentes reutilizables y bien organizados.
- **Páginas de Documentación**: Incluye páginas de documentación y ejemplos para facilitar el desarrollo.
- **Alto Rendimiento**: Optimizado para carga rápida y buena experiencia de usuario.

## 🧩 Principales Componentes

- **Header**: Navegación principal con logo y menú.
- **HeroBanner**: Banner principal con mensaje de bienvenida y llamado a la acción.
- **FoodCardCarousel**: Carrusel de tarjetas de comida con desplazamiento horizontal.
- **RestaurantCardCarousel**: Carrusel de tarjetas de restaurantes.
- **HowItWorks**: Sección explicativa del funcionamiento de la plataforma.
- **KeyFeatures**: Características clave del servicio con iconos.
- **Footer**: Información de contacto, navegación y redes sociales.

## 📚 Documentación y Ejemplos

El proyecto incluye páginas adicionales para referencia:

- `/ui-components` - Muestra todos los componentes UI básicos y sus variantes.
- `/docs` - Documentación técnica detallada para desarrolladores.
- `/examples/food-card-example` - Ejemplo de implementación de tarjetas de comida.
- `/examples/restaurant-card-example` - Ejemplo de implementación de tarjetas de restaurante.

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Instala las dependencias                         |
| `pnpm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm run build`           | Construye el sitio para producción en `./dist/`  |
| `pnpm run preview`         | Previsualiza la build localmente antes de desplegar |
| `pnpm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 🎨 Guía de Estilos

El proyecto utiliza una guía de estilos consistente con:

- **Tipografía**: Fuentes principales para títulos y cuerpo de texto.
- **Colores**: Paleta de colores primarios, neutros y de acento.
- **Espaciado**: Sistema de espaciado consistente en todo el sitio.
- **Componentes**: Estilos coherentes para botones, tarjetas y otros elementos de UI.

## 👀 ¿Quieres saber más?

Para más información sobre Astro, consulta [la documentación oficial](https://docs.astro.build).
