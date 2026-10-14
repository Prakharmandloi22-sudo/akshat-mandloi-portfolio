# Akshat Mandloi — Portfolio Website

A high-fidelity, fully functional, production-ready developer & UI/UX designer portfolio website built with React, Vite, Framer Motion, and Lucide React. Faithfully recreates the attached Figma design reference with precision typography, color tokens, interactive mockups, project filtering, modal case studies, and functional contact form processing.

![Figma Fidelity](https://img.shields.io/badge/Figma-100%25%20Fidelity-EF4423)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.1-purple)

---

## 🌟 Key Features

1. **Exact Figma Design Fidelity**:
   - Matches the off-white hero section (`#F6F5F2`), glowing orange accents (`#EF4423`), dark work gallery theme (`#121316`), typography scale, and rounded visual container grids (`24px` radius).
   - Recreates the exact typography: `AKSHAT` in bold black and `MANDLOI` in vibrant orange.

2. **Interactive Figma Component Mockup**:
   - Interactive hero widget simulating a live Figma prototype canvas (`DESIGN 1.01`, glowing pulse indicator, toggleable `UI/UX` badge, code preview switch, and form/function tags).

3. **Project Portfolio & Dynamic Category Filters**:
   - Interactive filter tabs (`ALL`, `WEBSITES`, `MOBILE APPS`, `AI & SAAS`, `E-COMMERCE`, `DASHBOARDS`).
   - Project cards matching Figma visual layouts: **Sheque**, **Swart Plastering**, **Family Interiors**, **Easy Waste Management**, **FinTrack**, **SkillXchange**, **Petrol Pump Rewards App**, and **AI Social Media Caption Generator**.

4. **Deep-Dive Case Study Modals**:
   - Clicking `VIEW CASE STUDY ↗` opens a comprehensive drawer showing project problem statements, architectural solutions, key features, metric tags, live demo links, and GitHub repository links.

5. **Validated Contact Form**:
   - Full input validation (Email regex, name, message length).
   - Integrated with `@emailjs/browser` API for real email delivery + celebratory confetti animation (`canvas-confetti`) on successful submission.

6. **Fully Responsive & Accessible**:
   - Fluid responsive breakpoints across mobile (320px–480px), tablet (481px–768px), laptop (769px–1280px), and desktop (1281px+).
   - Smooth navigation scrolling, back-to-top button, and keyboard accessibility.

---

## 📁 Project Structure

```
akshat-mandloi/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── DesignApproach.jsx
│   │   ├── SelectedWork.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js     # Centralized data store (Editable!)
│   ├── styles/
│   │   ├── variables.css        # Figma color & design tokens
│   │   └── global.css           # Utility classes & component resets
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure Node.js (v18+) is installed on your system.

### 2. Installation
Install project dependencies:
```bash
cmd /c npm install
```

### 3. Running Locally (Development Mode)
Start the local Vite development server:
```bash
cmd /c npm run dev
```
The site will be available at `http://localhost:3000`.

### 4. Production Build
Generate optimized static bundle for deployment:
```bash
cmd /c npm run build
```

---

## ✉️ Configuring Real EmailJS Delivery (Optional)

To receive real email submissions directly to your inbox:

1. Create a free account at [EmailJS.com](https://www.emailjs.com/).
2. Create a `.env.local` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
3. Restart the dev server. Form submissions will automatically route through your EmailJS service!

---

## 🎨 Customizing Content

All text content, project details, GitHub links, social handles, skills, and metrics can be edited in a single file:
`src/data/portfolioData.js`
