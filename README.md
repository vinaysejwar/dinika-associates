# Dinika Associates — Official Web Platform

[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Next.js%2016%20%7C%20React%2019%20%7C%20Tailwind%20v4-blue)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript%205-blue.svg)](https://www.typescriptlang.org/)
[![Email Service](https://img.shields.io/badge/Email-Resend-green)](https://resend.com/)

**Dinika Associates** is a premier real estate consultancy headquartered in Indore, Madhya Pradesh (established in 2022). This repository houses the source code for their official web application — a modern, fast, and responsive digital platform designed to showcase residential, commercial, agricultural, and investment property portfolios, highlight upcoming developments (such as the IRIS Group projects on the Super Corridor), and facilitate direct client communication.

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Design System & UI Foundations](#-design-system--ui-foundations)
- [File & Directory Structure](#-file--directory-structure)
- [Environment Configuration](#-environment-configuration)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Developer & Contact Information](#-developer--contact-information)

---

## ✨ Features

- **Dynamic Property Showcase:** An interactive gallery showcasing upcoming, ongoing, and completed developments (such as the IRIS Group projects), complete with a responsive client-side filter.
- **Secure Server-Action Contact Form:** An enquiry form built using React `useTransition` and Next.js Server Actions, featuring strict client/server-side validation and integration with the **Resend API** for reliable HTML email delivery.
- **Indore Super Corridor Focus:** Specialized landing copy and projects emphasizing Indore's fastest-growing residential and commercial corridor.
- **Premium User Experience:** Modern layout design built on top of bespoke `<Section>` and `<Card>` primitives, complete with fluid hover interactions, subtle animations, and responsive flex grids.
- **Interactive Map Integration:** A stylized Google Maps location embed that features custom CSS hover grayscale transitions.
- **Sticky Sub-navigation:** In-page anchor navigation on the Services page for a seamless scrolling experience.

---

## 🛠️ Tech Stack & Architecture

The application is built on top of a cutting-edge frontend stack:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [PostCSS 8](https://postcss.org/)
- **Email Service:** [Resend SDK](https://resend.com/) for server-side transactional emails
- **Components:** Built following modern `shadcn/ui` patterns (using utility libraries like `clsx` and `tailwind-merge`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Performance & Analytics:** Ready-integrated [@vercel/analytics](https://vercel.com/analytics) for tracking page metrics

---

## 🎨 Design System & UI Foundations

Dinika Associates utilizes an organic, elegant, and editorial design language that inspires trust and reflects real estate development:

### Color Palette

The project configures standard theme variables inside `app/globals.css` using CSS variables, mapped to Tailwind's `@theme` configuration:

| Color Type | Token | HSL / Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Base** | `--background` / `--card` | `#FFFFFF` | Core backgrounds, panels, and container fills. |
| **Primary** | `--primary` | `#bf9f62` (Terracotta/Clay) | Call-to-action buttons, key titles, and brand highlights. |
| **Secondary** | `--secondary` | `#1C1B19` (Deep Charcoal) | Core body text, page headers, footers, and high-contrast text. |
| **Accent** | `--accent` | `#5C6B4F` (Muted Sage/Olive) | Trust indicators, agricultural tag tags, and successes. |
| **Muted** | `--muted` | `#F5F5F4` | Background fills, sub-panels, and secondary sections. |

### Typography

- **Headings:** `DM Serif Display` — A luxurious, serif typeface that provides an editorial and established real-estate feel.
- **Body:** `Inter` — A highly legible sans-serif font optimized for reading long-form property details.
- **Meta / Labels:** `IBM Plex Mono` — A monospace typeface used for structural badges ("EST. 2022"), section eyebrows, and status tags.

---

## 📁 File & Directory Structure

```text
dinika-associates/
├── app/                            # Next.js App Router root
│   ├── about/                      # About Page (Company Story, Mission, Vision)
│   │   └── page.tsx
│   ├── actions/                    # Server Actions
│   │   └── send-contact-email.ts   # Contact form email handler (Resend integration)
│   ├── contact/                    # Contact Page (Form, details, location embed)
│   │   └── page.tsx
│   ├── projects/                   # Projects Page (Property filtering grid)
│   │   └── page.tsx
│   ├── services/                   # Services Page (Breakdown of offerings + sub-nav)
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css                 # Main stylesheet (Tailwind v4 imports & theme variables)
│   ├── layout.tsx                  # Base HTML / font load layouts
│   └── page.tsx                    # Landing / Home page entry
├── components/                     # Shared React components
│   ├── ui/                         # Base layout primitives
│   │   ├── button.tsx              # shadcn-inspired button component
│   │   ├── card.tsx                # Custom card component (titles, tags, descriptions)
│   │   └── section.tsx             # Standardized container layout block
│   ├── dinika-site.tsx             # Main Home page sections container
│   └── site-shell.tsx              # Site Header, Footer, Logo, Mobile Nav & CTAs
├── lib/                            # Shared utilities
│   └── utils.ts                    # Dynamic Tailwind class merger (cn utility)
├── public/                         # Static assets (images, logos, plans)
├── .env.example                    # Template for environment configuration
├── next.config.mjs                 # Next.js configuration
├── package.json                    # Package metadata & script commands
├── tsconfig.json                   # TypeScript compiler configuration
└── postcss.config.mjs              # PostCSS plugin settings
```

---

## 🔐 Environment Configuration

To send contact enquiries via email, the project relies on **Resend**. You need to register a free account, generate an API key, and configure it locally:

1. Copy the `.env.example` file and rename it to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and fill in your Resend API Key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

> [!NOTE]
> In production, configure this environment variable via your hosting dashboard (e.g., Vercel, Netlify).

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or later is recommended).

### Installation

1. Clone this repository to your local system:
   ```bash
   git clone https://github.com/your-username/dinika-associates.git
   cd dinika-associates
   ```
2. Install the project dependencies using npm, yarn, or pnpm:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

---

## 📝 Available Scripts

Here is a summary of the script commands available in the project:

- `npm run dev`: Starts the Next.js development server with hot-reloading.
- `npm run build`: Compiles the application for production deployment.
- `npm run start`: Starts the compiled production server.
- `npm run lint`: Runs ESLint to check the codebase for syntax and code style issues.

---

## 🚀 Deployment

The project is optimized for deployment on the [Vercel Platform](https://vercel.com):

1. **Push your code** to a GitHub/GitLab/Bitbucket repository.
2. **Import the repository** into Vercel.
3. **Configure Environment Variables** in Vercel:
   - Add `RESEND_API_KEY` under the Project Settings -> Environment Variables.
4. **Deploy.** Vercel will automatically run `npm run build` and serve the application globally.

---

## 🧑‍💻 Developer & Contact Information

- **Developer:** Vinay Sejwar (Full Stack Developer)
- **Email Contact:** [dinikaassociates@gmail.com](mailto:dinikaassociates@gmail.com)
- **Official Office Address:**
  UG 6 Lokhandwala Street,
  Goyal Nagar, Indore,
  Madhya Pradesh - 452016
- **Contact Numbers:**
  - Office Landline: `0731 4058609`
  - Mobile Hotline: `+91 94247 21555`
