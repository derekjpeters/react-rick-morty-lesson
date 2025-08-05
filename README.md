# React + Tailwind CSS Project

A modern React application built with Vite and styled with Tailwind CSS v3.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable)

   ```bash
   git clone <your-repo-url>
   cd react-tailwind-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📦 Dependencies

### Core Dependencies

- **React** `^18.2.0` - JavaScript library for building user interfaces
- **React DOM** `^18.2.0` - React package for working with the DOM
- **React Router DOM** `^7.7.1` - Declarative routing for React
- **MD5** `^2.3.0` - JavaScript function to calculate MD5 hash

### Development Dependencies

- **Vite** `^7.0.6` - Fast build tool and development server
- **@vitejs/plugin-react** `^4.2.1` - Official Vite plugin for React
- **Tailwind CSS** `^3.4.17` - Utility-first CSS framework
- **PostCSS** `^8.5.6` - Tool for transforming CSS
- **Autoprefixer** `^10.4.21` - PostCSS plugin to parse CSS and add vendor prefixes
- **ESLint** `^8.57.0` - JavaScript linter with React plugins

## 🎨 Tailwind CSS v3 Setup

This project is already configured with Tailwind CSS v3. Here's how it's set up:

### Configuration Files

1. **tailwind.config.js** - Tailwind configuration

   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

2. **postcss.config.js** - PostCSS configuration

   ```javascript
   export default {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```

3. **src/index.css** - Tailwind directives (should include):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Setting Up Tailwind CSS v3 from Scratch

If you need to set up Tailwind CSS v3 in a new project:

1. **Install Tailwind CSS**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Initialize Tailwind CSS**

   ```bash
   npx tailwindcss init -p
   ```

3. **Configure template paths** in `tailwind.config.js`:

   ```javascript
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ]
   ```

4. **Add Tailwind directives** to your CSS file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```text
├── public/
│   └── vite.svg
├── src/
│   ├── pages/
│   │   └── Characters.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Features

- ⚡ Fast development with Vite
- 🎨 Tailwind CSS v3 for styling
- 🧭 React Router for navigation
- 📱 Responsive design utilities
- 🔧 ESLint for code quality
- 🏗️ Production-ready build system

## 🔧 Customization

### Extending Tailwind Theme

Add custom colors, fonts, or spacing in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'custom-blue': '#1fb6ff',
    },
    fontFamily: {
      'custom': ['Custom Font', 'sans-serif'],
    },
  },
},
```

### Adding Tailwind Plugins

Install and configure plugins in `tailwind.config.js`:

```bash
npm install @tailwindcss/forms @tailwindcss/typography
```

```javascript
plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
],
```

## 📚 Learn More

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` to check code quality
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
