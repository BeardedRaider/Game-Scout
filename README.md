# 🎮 GameScout — A Responsive Web App for Video Game Discovery

GameScout is a modern, responsive web application designed to streamline the process of discovering video games. It provides real‑time data from the RAWG API, a clean and accessible UI, and a fast, mobile‑first experience.  
This project was developed as part of a BSc (Hons) Web & Mobile Development Honours Project at the University of the West of Scotland.

---

## 🚀 Features

- 🔍 **Real‑time search** with instant results  
- 🎚️ **Dynamic filtering** (genre, platform, release date)  
- 🌙 **Dark mode** with Chakra UI’s colour‑mode system  
- 🎥 **Trailer system** with:
  - RAWG MP4 trailers  
  - YouTube fallback  
  - Shimmer loading states  
  - Blurred poster placeholders  
  - Smooth fade‑in transitions  
- 📱 **Fully responsive** mobile‑first layout  
- ♿ **Accessibility‑focused design** (ARIA labels, keyboard navigation, semantic structure)  
- ⚡ **Fast performance** using Vite + React + TypeScript  
- 🧩 **Component‑based architecture** for scalability and maintainability  

---

## 🧪 Framework Comparison (Project Context)

This project was created to evaluate **CSS frameworks in a real‑world UX application**, comparing:

### **Tailwind CSS (early prototype)**
- Utility‑first  
- Fast prototyping  
- Highly flexible  
- Verbose markup  
- Requires careful structure for maintainability  

### **Chakra UI (final implementation)**
- Component‑driven  
- Built‑in accessibility  
- Consistent spacing, colour, and typography  
- Faster development workflow  
- Better long‑term maintainability  

The final version of GameScout uses **Chakra UI**, informed by the comparative findings documented in the Honours dissertation.

---

## 🛠️ Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Chakra UI**
- **RAWG Video Games Database API**
- **Axios**
- **React Router**
- **Netlify (deployment)**

---

## 📁 Project Structure

src/
├── components/
│    ├── GameCard/
│    ├── GameGrid/
│    ├── Trailer/
│    ├── FilterPanel/
│    └── Navbar/
├── pages/
│    ├── Games.tsx
│    ├── GameDetails.tsx
│    └── Home.tsx
├── hooks/
│    ├── useGames.ts
│    ├── useGenres.ts
│    └── usePlatforms.ts
├── theme/
├── assets/
└── main.tsx


---

## 🔌 RAWG API Usage

GameScout uses the RAWG API to fetch:

- Game lists  
- Search results  
- Genres  
- Platforms  
- Game details  
- Trailers & screenshots  

You must provide your own API key:


---

## ♿ Accessibility

GameScout was built with accessibility as a core requirement:

- Semantic HTML  
- ARIA labels  
- Keyboard‑friendly navigation  
- High‑contrast colour modes  
- Screen‑reader‑friendly structure  
- Chakra UI’s accessible components  

---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/BeardedRaider/Game-Scout.git
cd GameScout

Install dependencies:
npm install

Add your RAWG API key:
VITE_RAWG_API_KEY= (stored in env for security)

Run the development server:
npm run dev

Build for production:
npm run build

Preview the build:
npm run preview

🌐 Deployment

GameScout is deployed using Netlify with:

    Continuous deployment from GitHub

    Environment variables stored securely

    SPA routing handled via _redirects

    Author

Honours Project

This project was developed as part of:

BSc (Hons) Web & Mobile Development  
University of the West of Scotland
Honours Project 2025/26

The full dissertation includes:

    Literature review

    Framework comparison

    UX evaluation

    Accessibility testing

    Performance analysis

    Developer‑led heuristic evaluation


License

This project is for educational and academic purposes.
You may fork or reference it, but please credit the original author.

Shane Crossman  
B01740631
University of the West of Scotland
2025/26