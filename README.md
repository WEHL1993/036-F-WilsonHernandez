# 🍸 Cocktail Explorer

Una aplicación web moderna para explorar y descubrir cocteles de todo el mundo, consumiendo la API de [TheCocktailDB](https://www.thecocktaildb.com/).

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Descripción

Cocktail Explorer es una aplicación web interactiva que permite a los usuarios explorar una amplia variedad de cocteles, ver sus ingredientes, instrucciones de preparación e imágenes. La aplicación consume datos en tiempo real de TheCocktailDB API y presenta la información de manera atractiva y fácil de usar.

## ✨ Características

- 🎲 **Cocteles Aleatorios**: Muestra 15 cocteles aleatorios en formato de tarjetas
- 🖼️ **Vista de Tarjetas**: Cada coctel se presenta con imagen, categoría, tipo y descripción
- 🔍 **Modal Detallado**: Vista completa con información detallada al seleccionar un coctel
- 📱 **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- ⚡ **Carga Rápida**: Implementado con Vite para un rendimiento óptimo
- 🎨 **Animaciones Suaves**: Transiciones y efectos visuales con Framer Motion
- 🌐 **Navegación SPA**: Enrutamiento del lado del cliente con React Router

## 🛠️ Stack Tecnológico

- **React 19.2.0**: Biblioteca de interfaz de usuario
- **TypeScript 5.9.3**: Tipado estático para mayor seguridad
- **Vite 7.2.2**: Build tool ultrarrápido
- **Tailwind CSS 4.1.17**: Framework de CSS utility-first
- **React Router DOM 7.9.5**: Enrutamiento declarativo
- **Framer Motion 12.23.24**: Biblioteca de animaciones
- **Lucide React**: Iconos SVG optimizados

## 🚀 Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/WEHL1993/036-F-WilsonHernandez.git
cd examen-final
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm run dev

# Construye la aplicación para producción
npm run build

# Previsualiza la build de producción
npm run preview

# Ejecuta el linter
npm run lint
```

## 📁 Estructura del Proyecto

```
examen-final/
├── public/
│   └── img/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── AcercaDe.tsx
│   │   ├── Consumo.tsx
│   │   └── Inicio.tsx
│   ├── services/
│   │   └── api.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔌 API Utilizada

Este proyecto consume la API pública de [TheCocktailDB](https://www.thecocktaildb.com/api.php):

- **Endpoint principal**: `https://www.thecocktaildb.com/api/json/v1/1/`
- **Cocteles aleatorios**: `/random.php`
- **Búsqueda por ID**: `/lookup.php?i={id}`
- **Búsqueda por nombre**: `/search.php?s={name}`

## 🎯 Funcionalidades Principales

### Página de Consumo
- Muestra un grid responsive con 15 cocteles aleatorios
- Cada tarjeta incluye:
  - Imagen del coctel
  - Nombre
  - Categoría
  - Tipo (Alcohólico/No alcohólico)
  - Tipo de vaso
  - Vista previa de instrucciones

### Modal de Detalle
Al hacer clic en cualquier coctel, se abre un modal con:
- Imagen ampliada
- Información completa (categoría, tipo, vaso, etiquetas IBA)
- Lista detallada de ingredientes con medidas
- Instrucciones completas de preparación
- Enlace a video tutorial (si está disponible)

### Página Acerca De
- Muestra el stack tecnológico utilizado
- Tarjetas animadas con los logos de cada tecnología

## 💻 Desarrollo

El proyecto utiliza las siguientes configuraciones:

- **ESLint**: Para mantener la calidad del código
- **TypeScript**: Configuración estricta con `verbatimModuleSyntax`
- **Tailwind CSS**: Configuración personalizada con diseño responsive
- **Vite**: Configuración optimizada para React

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Wilson Hernández**
- GitHub: [@WEHL1993](https://github.com/WEHL1993)
- Repositorio: [036-F-WilsonHernandez](https://github.com/WEHL1993/036-F-WilsonHernandez)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🙏 Agradecimientos

- [TheCocktailDB](https://www.thecocktaildb.com/) por proporcionar la API gratuita
- Comunidad de React y TypeScript por las excelentes herramientas
- Todos los contribuidores que hacen posible las bibliotecas de código abierto

---

⭐ Si te ha gustado este proyecto, ¡no olvides darle una estrella en GitHub!
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
