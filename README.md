# Harshwardhan Pal — Premium Data Analyst Portfolio

A modern, production-ready personal portfolio website for **Harshwardhan Pal**, an aspiring Data Analyst and Computer Science Engineering student at **Jagannath University, Jaipur** (Expected Graduation: 2027).

Designed with a premium dark aesthetic (`#080B12`), glassmorphism cards, interactive Recharts visualizations, verified case study breakdowns, and responsive mobile-first layouts.

---

## 🚀 Live Demo & Key Highlights

- **Tagline**: *"Turning Raw Data Into Meaningful Insights."*
- **Aesthetic**: Premium Dark Theme (`#080B12`, `#101522`, `#111827`) with Electric Blue (`#3B82F6`) and Vibrant Purple (`#8B5CF6`) ambient glows.
- **Typography**: **Sora** for modern geometric headings, **Inter** for crisp data tables and body text.
- **Interactive Dashboard**: Working Recharts analytics showcase with live timeframe (30d, 90d, 180d, 1y) and category filters, KPI cards, and raw data inspection.
- **Truthful & Verified**: No fabricated skills percentages or fake photos. Elegant fallback avatar for photograph customization.
- **Downloadable Resume**: Real PDF resume pre-bundled in `public/Harshwardhan_Pal_Resume.pdf` with direct download and modal preview.

---

## 🛠️ Technology Stack

- **Core Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6 (Sub-second HMR & Rollup code-splitting)
- **Styling**: Tailwind CSS + Custom Glassmorphism & Glow Utilities
- **Data Visualizations**: Recharts 2 (Responsive Area, Bar, and Distribution Charts)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS keyframe animations (with `prefers-reduced-motion` accessibility support)

---

## 📂 Project Structure

```text
harsh-portfolio/
├── public/
│   ├── favicon.svg                   # Custom analytics icon
│   ├── profile-placeholder.svg       # Elegant HP monogram avatar
│   ├── Harshwardhan_Pal_Resume.pdf   # Verified downloadable resume PDF
│   └── projects/                     # Visual case study mockups
│       ├── sales-analysis.svg
│       ├── ecommerce-analysis.svg
│       ├── hr-analytics.svg
│       ├── netflix-analysis.svg
│       └── student-performance.svg
├── scripts/
│   ├── generate-resume-pdf.cjs       # Node script to compile resume
│   └── test-server.cjs               # Build verification & asset test
├── src/
│   ├── assets/                       # Static media assets
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky glass navbar + active section spy
│   │   ├── Hero.tsx                  # Hero section with live KPI badge & tech pills
│   │   ├── About.tsx                 # Verified bio, info cards & data workflow pipeline
│   │   ├── Skills.tsx                # Categorized skill cards without fake percentages
│   │   ├── Projects.tsx              # Project showcase with category filtering
│   │   ├── ProjectModal.tsx          # Deep-dive case study modal view
│   │   ├── DataDashboardDemo.tsx     # Dedicated interactive Recharts dashboard
│   │   ├── Experience.tsx            # Verified Python & Cisco training timeline
│   │   ├── Education.tsx             # B.Tech CSE at Jagannath University
│   │   ├── Certifications.tsx        # Credential verification showcase
│   │   ├── Contact.tsx               # Validated contact form + email copy + mailto
│   │   ├── Footer.tsx                # Brand footer with navigation & copyright
│   │   ├── ScrollProgress.tsx        # Top scroll progress indicator
│   │   ├── ScrollToTop.tsx           # Floating back-to-top button
│   │   └── ResumeModal.tsx           # Interactive resume preview & download dialog
│   ├── data/
│   │   ├── projectsData.ts           # 5 featured projects with business methodology
│   │   ├── skillsData.ts             # 5 skill categories (Analytics, SQL, Python, DB, Tools)
│   │   ├── dashboardData.ts          # Sample multi-slice e-commerce analytics dataset
│   │   ├── experienceData.ts         # Internship & practical training data
│   │   ├── educationData.ts          # Academic degree & coursework data
│   │   └── certificationsData.ts     # Professional certifications data
│   ├── types/
│   │   └── index.ts                  # Comprehensive TypeScript interfaces
│   ├── App.tsx                       # Root view component
│   ├── index.css                     # Tailwind directives & dark theme styles
│   └── main.tsx                      # Vite React entry point
├── index.html                        # SEO, OpenGraph metadata, and Google Fonts
├── tailwind.config.js                # Custom palette, typography, and glow shadows
├── tsconfig.json                     # Strict TypeScript compiler options
├── vercel.json                       # Vercel deployment rewrite rules
└── vite.config.ts                    # Vite bundler & manual chunk splitting
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18 or newer recommended, tested on v24)
- npm, pnpm, or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/harshwardhanpal/harshwardhan-pal-portfolio.git
   cd harshwardhan-pal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔨 Building for Production

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

The compiled files will be output to the `dist/` folder.

To test the production build locally:
```bash
npm run preview
```

---

## 📸 Personalization Guide

### 1. Adding Your Real Profile Photograph
Place your actual photo named `profile.jpg` into the `public/` folder:
```text
public/profile.jpg
```
The application will automatically detect and load your real photo in the Hero section with ambient lighting. If not present, it safely displays the custom "HP" monogram placeholder.

### 2. Updating Your Resume PDF
To update your downloadable resume, simply place your latest PDF into:
```text
public/Harshwardhan_Pal_Resume.pdf
```
Both the Navbar, Hero, Contact section, and Resume Modal will instantly link to your updated PDF file.

### 3. Contact Form Configuration
The contact form comes with full client-side validation and a direct `mailto:` fallback pre-configured with Harshwardhan's details. To connect to an external email service such as Formspree or Web3Forms, update the `handleSubmit` method in [src/components/Contact.tsx](file:///c:/Users/harsh/OneDrive/Desktop/Proj/Harsh%20portfolio/src/components/Contact.tsx).

---

## 🌐 Deployment to Vercel

This repository includes a pre-configured `vercel.json` file.

### One-Click Deploy via Vercel CLI
1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```
3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Deploy via GitHub
1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Settings are automatically detected:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## 📄 License & Attribution

Designed and created for **Harshwardhan Pal**.
Free to use and customize as a portfolio foundation.
