# ryxu-xo - Developer Portfolio

A modern, interactive developer portfolio website with a hacker/cyberpunk aesthetic. Built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Cyberpunk Design**: Dark theme with neon accents and glitch effects
- ⚡ **Smooth Animations**: Framer Motion powered animations and transitions
- 📱 **Responsive Design**: Optimized for all device sizes
- 🎯 **Interactive Elements**: Typing animations, hover effects, and dynamic content
- 🚀 **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- 🎵 **Music Bot Focus**: Showcases Discord bot development and Euralink client

## Sections

- **Hero**: Animated terminal-style introduction with typing effects
- **About**: Personal bio and technical skills showcase
- **Projects**: Real GitHub repositories including Moosek, Euralink, and Discord Bot Creators
- **Services**: Euralink client and bot development services
- **Contact**: Interactive contact form with social links

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ryxu-xo/portfolio
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Main title and typing animation text
- `src/components/About.jsx` - Personal bio and skills
- `src/components/Contact.jsx` - Contact information and social links
- `src/components/Projects.jsx` - GitHub username for repository fetching

### GitHub Integration

To fetch real GitHub repositories, update the API call in `src/components/Projects.jsx`:

```javascript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos')
```

### Styling

The design uses Tailwind CSS with custom cyberpunk colors and animations. Key files:

- `tailwind.config.js` - Custom colors and animations
- `src/index.css` - Global styles and custom components
- Individual component files for specific styling

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animations

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: contact@ryxu-xo.tech
- GitHub: [@ryxu-xo](https://github.com/ryxu-xo)
- Website: [ryxu-xo.tech](https://ryxu-xo.tech)
