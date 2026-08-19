"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, ArrowUpRight, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
]

export function Logo() {
  return <Link href="/" aria-label="Dinika Associates home" className="flex flex-col items-start gap-0">
    <Image src="/dinika-logo.png" alt="Dinika Associates" width={20} height={56} className="h-14 w-auto object-contain mix-blend-multiply" priority />
  </Link>
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-border/40 bg-white backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
      <Logo />
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}
        <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20">Enquire Now <ArrowUpRight size={16} /></Link>
      </nav>
      <button type="button" className="rounded-full border border-border p-2 md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="flex flex-col gap-1 border-t border-border px-5 pb-5 pt-3 md:hidden bg-background" aria-label="Mobile navigation">
      {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted">{item.label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Enquire Now</Link>
    </nav>}
  </header>
}

export function SiteFooter() {
  return <footer className="bg-secondary py-16 text-secondary-foreground">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <Link href="/" aria-label="Dinika Associates home" className="flex flex-col items-start gap-0">
            <Image src="/dinika-logo-white.png" alt="Dinika Associates" width={20} height={56} className="h-14 w-auto object-contain mix-blend-screen" priority />
          </Link>
          <p className="mt-5 text-sm leading-6 text-secondary-foreground/70">Building dreams, creating values and relationships through honest real estate consultancy.</p>
          <p className="mt-6 font-mono text-xs font-bold tracking-widest text-accent">EST. 2022</p>
        </div>
        <div className="flex gap-12 sm:gap-24">
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-secondary-foreground">Links</h4>
            <Link href="/about" className="hover:text-primary transition-colors">About us</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-secondary-foreground">Contact</h4>
            <p>Indore, Madhya Pradesh<br />India</p>
            <a href="mailto:dinikaassociates@gmail.com" className="hover:text-primary transition-colors mt-2">dinikaassociates@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-secondary-foreground/10 pt-8 text-xs text-secondary-foreground/50">
        <p>&copy; {new Date().getFullYear()} Dinika Associates. All rights reserved.</p>
      </div>
    </div>
  </footer>
}

export function CtaBanner({ title, description }: { title?: string, description?: string }) {
  return (
    <section className="bg-primary px-5 py-20 text-primary-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title || "Your property is more than an investment \u2014 it's the foundation of your future."}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">{description || "Get in touch with our experts today for transparent advice and personalized solutions."}</p>
        <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:scale-105 hover:bg-muted">Contact Us <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  )
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="border-b border-border bg-muted py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-balance font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{description}</p></div></section>
}

export function PageFrame({ children, ctaTitle, ctaDescription }: { children: React.ReactNode, ctaTitle?: string, ctaDescription?: string }) {
  return <><SiteHeader /><main>{children}</main><CtaBanner title={ctaTitle} description={ctaDescription} /><SiteFooter /></>
}
