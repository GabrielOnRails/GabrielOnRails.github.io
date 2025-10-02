# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Vite for fast development
- 🎭 Smooth animations and scroll effects
- 🧭 Smooth scroll navigation
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 📦 Component-based architecture

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Customization

To customize the portfolio with your own information, edit the `src/data/portfolio.ts` file:

- **Personal Information**: Name, title, bio, contact details
- **About Section**: Your detailed description
- **Skills**: List of your technologies and tools
- **Experience**: Your work history
- **Projects**: Your featured projects with images and links

### Adding Your Profile Image

Replace the placeholder URL in `src/data/portfolio.ts`:
```typescript
profileImage: "YOUR_IMAGE_URL_HERE"
```

### Adding Project Images

Update the `image` field for each project in the `projects` array with your actual project screenshots.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## Deployment

This portfolio can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Icons** - Icon library

## Project Structure

```
src/
├── components/
│   ├── sections/        # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/              # Reusable UI components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── ProjectCard.tsx
│       └── TimelineItem.tsx
├── data/
│   └── portfolio.ts     # Portfolio data configuration
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## License

This project is open source and available under the MIT License.

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!
