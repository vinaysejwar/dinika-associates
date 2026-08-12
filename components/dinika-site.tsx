'use client'

import Link from 'next/link'
import { ArrowRight, Home, Building2, Trees, TrendingUp, CheckCircle2, ShieldCheck, Map, Users } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardImage, CardTitle } from '@/components/ui/card'

export function DinikaSite() {
  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO */}
      <section className="relative pt-24 pb-20 lg:pt-30 lg:pb-32 px-5 sm:px-8 lg:px-12 bg-background border-b border-border/50">
        <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-[5.5rem] max-w-5xl text-secondary">
            Real Estate &mdash; Building Dreams, <span className="text-primary">Creating Value</span> & Relationships
          </h1>
          <p className="mt-8 text-lg sm:text-xl leading-8 text-muted-foreground max-w-2xl">
            We help you make confident property decisions in Indore with honest guidance, transparent transactions, and personalized solutions tailored to your future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 w-full sm:w-auto">
              Explore Properties
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-secondary/20 w-full sm:w-auto">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[450px]">
            <div className="md:col-span-2 overflow-hidden rounded-2xl bg-muted relative h-[300px] md:h-auto border border-border/50">
              <img src="/projects/Residential.jpg" alt="Residential Property" className="absolute inset-0 size-full object-cover" />
            </div>
            <div className="grid grid-rows-2 gap-4 h-[400px] md:h-auto">
              <div className="overflow-hidden rounded-2xl bg-muted relative border border-border/50">
                <img src="/projects/images.jfif" alt="Commercial Property" className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl bg-muted relative border border-border/50">
                <img src="/projects/farm-estate.png" alt="Agricultural Land" className="absolute inset-0 size-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO / VALUE STATEMENT */}
      <Section className="py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p className="eyebrow">Our Value</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl text-secondary">Shaping financial futures through smart real estate.</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
              Whether you are buying a dream home for your family, expanding your business with a new commercial space, or investing in land for long-term growth, the right real estate decision shapes your financial future. At Dinika Associates, we provide the clarity and expertise needed to navigate Indore&apos;s dynamic property market with confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-2">Heritage</p>
              <h4 className="font-serif text-2xl text-primary">Est. 2022</h4>
              <p className="mt-2 text-sm text-muted-foreground">Built on a foundation of trust and transparency.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-2">Services</p>
              <h4 className="font-serif text-2xl text-primary">Comprehensive</h4>
              <p className="mt-2 text-sm text-muted-foreground">Residential, Commercial, Agricultural & Investment.</p>
            </div>
            <div className="sm:col-span-2 rounded-2xl border border-primary/20 bg-primary p-6 shadow-md">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-2">Location</p>
              <h4 className="font-serif text-2xl text-primary-foreground">Trusted Indore Consultancy</h4>
              <p className="mt-2 text-sm text-primary-foreground/90">Deep local market knowledge across prime real estate zones.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. WHAT WE OFFER */}
      <Section background="muted" eyebrow="What we offer" title="Property portfolios tailored to your needs.">
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Residential", desc: "Find your perfect family home or modern apartment.", link: "/services#residential" },
            { icon: Building2, title: "Commercial", desc: "Strategic spaces for offices, retail, and business growth.", link: "/services#commercial" },
            { icon: Trees, title: "Agricultural", desc: "Fertile land and farm estates with high appreciation.", link: "/services#agricultural" },
            { icon: TrendingUp, title: "Investment", desc: "High-yield property investments and portfolio advisory.", link: "/services#investment" },
          ].map((item, i) => (
            <Link key={i} href={item.link} className="group block h-full">
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all hover:shadow-md hover:border-primary/30 flex flex-col">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                  <item.icon className="size-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 4. WHY DINIKA ASSOCIATES */}
      <Section eyebrow="The Dinika Difference" title="Why clients choose us." className="py-24">
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-border pt-12">
          {[
            { icon: ShieldCheck, title: "Transparent Advice", desc: "Honest guidance with no hidden agendas or surprises." },
            { icon: Users, title: "Personalized Solutions", desc: "Strategies tailored to your specific financial and lifestyle goals." },
            { icon: Map, title: "Local Market Expertise", desc: "Deep insights into Indore's growing property landscape." },
            { icon: CheckCircle2, title: "End-to-End Support", desc: "Seamless assistance from initial search to final transaction." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-4 inline-flex items-center gap-3">
                <item.icon className="size-6 text-accent" />
                <h4 className="font-serif text-xl text-secondary">{item.title}</h4>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. FEATURED PROJECTS TEASER */}
      <Section background="muted" eyebrow="Featured Projects" title="Recent opportunities.">
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "IRIS Premium", status: "Ongoing", image: "/projects/indore-residence.png", desc: "Luxury residential apartments in a prime locale." },
            { name: "IRIS Park", status: "Completed", image: "/projects/farm-estate.png", desc: "Premium plotted development for custom homes." },
            { name: "Super Corridor Hub", status: "Upcoming", image: "/projects/super-corridor.png", desc: "Next-gen commercial spaces on the Super Corridor." }
          ].map((project, i) => (
            <Card key={i}>
              <div className="relative">
                <CardImage src={project.image} alt={project.name} />
                <div className="absolute top-4 left-4 rounded-full bg-background/95 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                  {project.status}
                </div>
              </div>
              <CardContent>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription className="line-clamp-2">{project.desc}</CardDescription>
                <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors">
                  View Details <ArrowRight size={14} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted hover:border-border/80 hover:shadow-sm">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </div>
  )
}
