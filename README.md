# Biings Design System

[![npm version](https://img.shields.io/npm/v/biings-ds.svg?labelColor=46285D&color=8C50B9&label=npm&style=flat)](https://www.npmjs.com/package/biings-ds)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

A comprehensive design system for building consistent user experiences across Biings products. Built on Bulma 0.9 with custom components, typography, and a complete icon set.

## 🚀 Quick Start

### Installation

```bash
npm install biings-ds
```
```bash
yarn add biings-ds
```

### Usage

Include the CSS file in your project:

```html
<link rel="stylesheet" href="node_modules/biings-ds/build/bds.css">
```

For icons, include the SVG sprite:

```html
<svg class="icon">
  <use href="node_modules/biings-ds/build/bds-icons.min.svg#icon-name"></use>
</svg>
```

## 📦 What's Included

### Core Files
- **`bds.css`** - Complete CSS framework with all components and utilities
- **`bds-icons.min.svg`** - SVG sprite with 310+ custom icons
- **Fonts** - Averta (sans-serif) and Plush (serif) font families

### Components
- **Layout**: Box, columns, hero, section, footer
- **Forms**: Input, textarea, select, checkbox, radio, file upload
- **Navigation**: Menu, breadcrumb, pagination, tabs
- **Data Display**: Table, card, media, message, notification
- **Feedback**: Modal, dropdown, tooltip, loader, skeleton
- **Interactive**: Button, tag, badge, progress bar

### Design Tokens
- **Colors**: Primary (#8c50b9), secondary (#cb9569), state colors
- **Typography**: Custom font stacks with Averta and Plush
- **Spacing**: Consistent spacing scale
- **Border Radius**: Rounded corners system
- **Shadows**: Elevation system

## 🎨 Design System Features

### Typography
- **Primary Font**: Averta (clean, modern sans-serif)
- **Secondary Font**: Plush (elegant serif for headings)
- **Handwriting Font**: Caveat (for special emphasis)
- **Monospace**: Roboto Mono (for code)

### Color Palette
- **Primary**: Purple (#8c50b9) - Main brand color
- **Secondary**: Orange (#cb9569) - Accent color
- **State Colors**: Info, success, warning, danger
- **Neutral**: Black, white, grays, light/dark variants

### Icons
- **310+ Custom Icons** in SVG format
- **Optimized**: Minified and combined into single sprite
- **Scalable**: Vector-based for crisp display at any size
- **Accessible**: Proper ARIA labels and semantic markup

## 🛠️ Development

### Prerequisites
- Node.js >= 20.0.0
- Yarn >= 1.22.19

### Setup
```bash
# Clone the repository
git clone https://github.com/Biings/biings-ds.git
cd biings-ds

# Install dependencies
yarn install

# Start development server
yarn dev
```

### Build Commands
```bash
# Build CSS and icons
yarn build

# Build CSS only
yarn styles

# Build icons only
yarn icons

# Watch for changes
yarn dev
```

### Project Structure
```
src/
├── styles/
│   ├── bds.sass              # Main entry point
│   ├── bds_vars.sass         # Bulma configuration
│   └── bds/                  # Component styles
│       ├── avatar.sass
│       ├── button.sass
│       ├── form.sass
│       └── ...
├── icons/                    # SVG icon sources
└── themes/                   # Theme variations

build/
├── bds.css                   # Compiled CSS
├── bds-icons.min.svg         # Icon sprite
└── fonts/                    # Web fonts
```

## 📚 Documentation

Visit the [live documentation](https://biings.design) for:
- Component examples and usage
- Design guidelines and best practices
- Color palette and typography
- Icon library and usage
- Migration guides

## 🤝 Contributing

We welcome contributions! Please see our [contribution guidelines](https://biings.design/#/contribute) for:
- Design principles and standards
- Development workflow
- Code style guidelines
- Pull request process

## 📄 License

This project is licensed under the [CC BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/) - see the [LICENCE.md](LICENCE.md) file for details.

## 🏢 About Biings

Biings Design System is developed by [Biings Technologies SA](https://www.biings.com), a company focused on creating innovative digital solutions.

---

**Made with ❤️ by the Biings team**
