# Propuesta de Sitio Web para Gimnasio "FitZone"

Este repositorio contiene el código fuente de la propuesta inicial para el sitio web del gimnasio FitZone, desarrollada como parte de la prueba técnica para la vacante de Front-End Developer.

## 1. Justificación de Decisiones de Diseño y Tecnología

### Tecnologías Utilizadas

*   **Next.js (con App Router):** Elegí Next.js por ser un framework de React robusto y moderno que ofrece un rendimiento excepcional gracias al renderizado en el servidor (SSR) y la generación de sitios estáticos (SSG). El App Router facilita una estructura de proyecto organizada y escalable.
*   **React:** Utilicé React para construir una interfaz de usuario interactiva y modular. La componentización permite crear un código más limpio, mantenible y reutilizable.
*   **Tailwind CSS:** Para el estilizado, opté por Tailwind CSS. Es un framework "utility-first" que acelera enormemente el desarrollo de interfaces responsivas y personalizadas sin salir del HTML, manteniendo la consistencia visual.
*   **shadcn/ui:** Integré esta colección de componentes de UI reutilizables. No es una librería de componentes tradicional, sino un conjunto de scripts que instalan componentes directamente en el proyecto, permitiendo total control sobre su código y estilo. Esto acelera el desarrollo de elementos complejos como formularios, diálogos y menús, garantizando accesibilidad y calidad.
*   **Lucide React:** Para la iconografía, utilicé Lucide, una librería de iconos SVG ligera, consistente y fácil de implementar.

### Decisiones de Diseño y UX/UI

*   **Mobile-First:** El diseño se concibió desde el principio para dispositivos móviles y luego se adaptó a pantallas más grandes. Esto garantiza una experiencia de usuario óptima en la plataforma más utilizada.
*   **Paleta de Colores:** Seleccioné una paleta oscura (`bg-gray-950`) con un color de acento vibrante (`text-green-400`). Este esquema transmite modernidad, energía y profesionalismo, apuntando al público objetivo de 20-40 años.
*   **Jerarquía Visual Clara:** Utilicé diferentes tamaños de fuente, pesos y colores para guiar la atención del usuario a través de las secciones más importantes, desde el titular del "hero" hasta los llamados a la acción (CTA).
*   **Accesibilidad (a11y):** Se implementaron prácticas básicas de accesibilidad, como el uso de HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`), atributos `alt` en imágenes, etiquetas `aria-label` y `sr-only` para elementos interactivos, y un contraste de color adecuado.
*   **Micro-interacciones:** Añadí sutiles transiciones en los botones y tarjetas para proporcionar feedback visual al usuario y hacer la navegación más agradable.

## 2. Posibles Mejoras con Más Tiempo

*   **Animaciones Avanzadas:** Implementar animaciones al hacer scroll (por ejemplo, con `Framer Motion`) para que los elementos de las secciones aparezcan de forma dinámica, mejorando el impacto visual.
*   **Modo Claro/Oscuro:** Añadir un interruptor para que el usuario pueda elegir entre un tema claro y el oscuro actual, mejorando la personalización y la accesibilidad.
*   **Optimización de Imágenes:** Integrar el componente `<Image>` de Next.js para la optimización automática de imágenes, sirviendo formatos modernos como WebP y aplicando "lazy loading" para mejorar los tiempos de carga.
*   **Validación de Formulario Avanzada:** Utilizar librerías como `react-hook-form` y `zod` para una validación de formularios más robusta y una mejor experiencia de usuario al mostrar errores.
*   **Pruebas Unitarias y de Integración:** Añadir pruebas con herramientas como Jest y React Testing Library para garantizar la fiabilidad y estabilidad del código a largo plazo.

## 3. Propuesta para la Siguiente Fase del Proyecto

*   **Backend y Base de Datos:** Desarrollar un backend (por ejemplo, con Server Actions de Next.js) para gestionar el formulario de "clase gratis", guardando los registros en una base de datos (como Supabase o Vercel Postgres).
*   **Sistema de Gestión de Contenidos (CMS):** Integrar un CMS "headless" (como Sanity, Strapi o Contentful) para que el personal del gimnasio pueda actualizar dinámicamente los horarios de clases, testimonios y servicios sin necesidad de tocar el código.
*   **Área de Miembros:** Crear un sistema de autenticación para que los miembros puedan iniciar sesión, ver su perfil, reservar clases online y hacer seguimiento de su progreso.
*   **Integración con Pasarela de Pagos:** Conectar el sitio con una pasarela de pagos (como Stripe) para gestionar la compra y renovación de membresías.
*   **Blog y Contenido de Valor:** Desarrollar una sección de blog con artículos sobre fitness, nutrición y bienestar para atraer tráfico orgánico (SEO) y posicionar a FitZone como una autoridad en el sector.
