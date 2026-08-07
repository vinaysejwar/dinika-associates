# Dinika Associates – Real Estate Consultancy

**Dinika Associates** is a trusted real estate consultancy headquartered in Indore, Madhya Pradesh. Established in 2022, it provides exceptional real estate solutions for residential, commercial, agricultural, and investment properties across Indore's most sought-after locations. 

This repository contains the source code for the Dinika Associates official web platform, custom-built to showcase their services, highlight ongoing projects (like the IRIS Group developments on the Super Corridor), and provide an intuitive way for clients to get in touch.

## 🚀 Tech Stack

This project is built using modern web technologies to ensure a fast, responsive, and highly accessible user experience:

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components:** Custom components built with `shadcn/ui` patterns (using `clsx`, `tailwind-merge`) and Lucide React icons.
*   **Fonts:** Next.js built-in Google Fonts (`Inter`, `DM Serif Display`, `IBM Plex Mono`)
*   **Developer:** Built by **Vinay Sejwar** (Full Stack Developer)

## 🎨 Design System

The site implements a bespoke, earthy, and trustworthy design system rather than relying on generic corporate templates:

*   **Color Palette:**
    *   **Base:** White (`#FFFFFF`)
    *   **Primary (Brand):** Terracotta / Warm Clay (`#B5502E`) — Evokes land, construction, warmth, and trust.
    *   **Secondary:** Deep Charcoal (`#1C1B19`) — For high-contrast headers, text, and the footer.
    *   **Accent:** Muted Sage / Olive Green (`#5C6B4F`) — Used for agricultural ties, success badges, and subtle highlights.
*   **Typography:**
    *   **Headings:** `DM Serif Display` (Elegant, trustworthy, real-estate editorial feel).
    *   **Body:** `Inter` (Clean, legible).
    *   **Meta/Tags:** `IBM Plex Mono` (Used for "EST. 2022", eyebrows, and property badges).
*   **Component Architecture:** Employs reusable `<Section>` wrappers and a highly consistent `<Card>` component to maintain a unified layout language across all pages.

## 📁 Core Pages & Architecture

The project follows the standard Next.js App Router structure, completely built out with the following core pages:

*   **`/` (Home):** A high-impact landing page featuring a comprehensive hero section, value statements, service overviews, and a featured projects teaser.
*   **`/about` (About Us):** Details the company's story, mission, vision, and core differentiators.
*   **`/services` (Services):** A structured breakdown of Residential, Commercial, and Agricultural offerings, alongside comprehensive consulting, construction, and interior design services.
*   **`/projects` (Projects):** An interactive gallery showcasing upcoming, ongoing, and completed properties (featuring the IRIS Group), complete with a client-side filter.
*   **`/contact` (Contact Us):** A robust contact page with a functional enquiry form (client-side validation + success states), direct contact links, and a stylized Google Maps embed.

## 🛠️ Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository** (if you haven't already).
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4.  **Open [http://localhost:3000](http://localhost:3000)** with your browser to see the result.

## 📝 Scripts

*   `npm run dev`: Starts the Next.js development server.
*   `npm run build`: Builds the Next.js app for production.
*   `npm run start`: Starts the Next.js production server.
*   `npm run lint`: Runs ESLint to check for code quality.
