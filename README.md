# Portfolio Rio Ardiyansyah

Portfolio website untuk Rio Ardiyansyah - Computer Science Student & Front End Developer

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes (Dark/Light mode)
- **Deployment**: GitHub Pages

## 📂 Struktur Project

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/           # About page
│   ├── skills/          # Skills page
│   ├── projects/        # Projects showcase
│   ├── contact/         # Contact page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PageTransition.tsx
└── lib/                 # Utility functions (optional)
```

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portofolio_rio

# Install dependencies
npm install

# Run development server
npm run dev
```

## 📱 Features

- ✅ Multi-page portfolio (Home, About, Skills, Projects, Contact)
- ✅ Dark/Light mode toggle
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth page transitions with Framer Motion
- ✅ Professional, modern, elegant design
- ✅ GitHub Pages ready (static export)

## 🚀 Deployment ke GitHub Pages

### Step 1: Update `package.json` scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out",
    "start": "next start"
  }
}
```

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Update `next.config.ts`

```typescript
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portofolio_rio", // Ganti dengan nama repository Anda
};
```

### Step 4: Deploy

```bash
npm run deploy
```

## 🔗 Links

- **GitHub**: https://github.com/baguskara1
- **Instagram**: https://www.instagram.com/raaamsy
- **Email**: rioardiyansyah33@gmail.com
- **University**: Universitas Mercubuana Yogyakarta (2024)

## 🛠️ Skills

- **Languages**: JavaScript, PHP, Java, Python, C++, C
- **Frontend**: React, Next.js, HTML/CSS, Tailwind CSS
- **Backend**: Laravel, MySQL, PostgreSQL
- **Tools**: Git, GitHub, VS Code, Figma, Vite

## 📝 License

MIT License - feel free to use this template!

## 🤝 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)